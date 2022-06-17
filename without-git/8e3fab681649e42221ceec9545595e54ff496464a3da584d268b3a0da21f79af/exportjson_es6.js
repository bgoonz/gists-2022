// Includes functions for exporting active sheet or all sheets as JSON object (also Python object syntax compatible).
// Tweak the makePrettyJSON_ function to customize what kind of JSON to export.

const FORMAT_ONELINE   = 'One-line';
const FORMAT_MULTILINE = 'Multi-line';
const FORMAT_PRETTY    = 'Pretty';

const LANGUAGE_JS      = 'JavaScript';
const LANGUAGE_PYTHON  = 'Python';

const STRUCTURE_LIST = 'List';
const STRUCTURE_HASH = 'Hash (keyed by "id" column)';

/* Defaults for this particular spreadsheet, change as desired */
const DEFAULT_FORMAT = FORMAT_PRETTY;
const DEFAULT_LANGUAGE = LANGUAGE_JS;
const DEFAULT_STRUCTURE = STRUCTURE_LIST;


function onOpen() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const menuEntries = [
    {name: "Export JSON for this sheet", functionName: "exportSheet"},
    {name: "Export JSON for all sheets", functionName: "exportAllSheets"},
    {name: "Configure export", functionName: "exportOptions"},
  ];
  ss.addMenu("Export JSON", menuEntries);
}
    
    
function exportOptions() {
  const doc = SpreadsheetApp.getActiveSpreadsheet();
  const app = UiApp.createApplication().setTitle('Export JSON');
  
  const grid = app.createGrid(4, 2);
  grid.setWidget(0, 0, makeLabel(app, 'Language:'));
  grid.setWidget(0, 1, makeListBox(app, 'language', [LANGUAGE_JS, LANGUAGE_PYTHON]));
  grid.setWidget(1, 0, makeLabel(app, 'Format:'));
  grid.setWidget(1, 1, makeListBox(app, 'format', [FORMAT_PRETTY, FORMAT_MULTILINE, FORMAT_ONELINE]));
  grid.setWidget(2, 0, makeLabel(app, 'Structure:'));
  grid.setWidget(2, 1, makeListBox(app, 'structure', [STRUCTURE_LIST, STRUCTURE_HASH]));
  grid.setWidget(3, 0, makeButton(app, grid, 'Export Active Sheet', 'exportSheet'));
  grid.setWidget(3, 1, makeButton(app, grid, 'Export All Sheets', 'exportAllSheets'));
  app.add(grid);
  
  doc.show(app);
}

function makeLabel(app, text, id) {
  const lb = app.createLabel(text);
  if (id) lb.setId(id);
  return lb;
}

function makeListBox(app, name, items) {
  const listBox = app.createListBox().setId(name).setName(name);
  listBox.setVisibleItemCount(1);
  
  const cache = CacheService.getPublicCache();
  const selectedValue = cache.get(name);
  Logger.log(selectedValue);
  for (let i = 0; i < items.length; i++) {
    listBox.addItem(items[i]);
    if (items[1] == selectedValue) {
      listBox.setSelectedIndex(i);
    }
  }
  return listBox;
}

function makeButton(app, parent, name, callback) {
  const button = app.createButton(name);
  app.add(button);
  const handler = app.createServerClickHandler(callback).addCallbackElement(parent);;
  button.addClickHandler(handler);
  return button;
}

function makeTextBox(app, name) { 
  const textArea    = app.createTextArea().setWidth('100%').setHeight('200px').setId(name).setName(name);
  return textArea;
}

function exportAllSheets(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = ss.getSheets();
  const sheetsData = {};

  for (const sheet of sheets) {
    const rowsData = getRowsData_(sheet, getExportOptions(e));
    const sheetName = sheet.getName();
    sheetsData[sheetName] = rowsData;
  }

  const json = makeJSON_(sheetsData, getExportOptions(e));
  return displayText_(json);
}

function exportSheet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  const rowsData = getRowsData_(sheet, getExportOptions(e));
  const json = makeJSON_(rowsData, getExportOptions(e));
  return displayText_(json);
}
  
function getExportOptions(e) {
  const options = {};
  
  options.language = e && e.parameter.language || DEFAULT_LANGUAGE;
  options.format   = e && e.parameter.format || DEFAULT_FORMAT;
  options.structure = e && e.parameter.structure || DEFAULT_STRUCTURE;
  
  const cache = CacheService.getPublicCache();
  cache.put('language', options.language);
  cache.put('format',   options.format);
  cache.put('structure',   options.structure);
  
  Logger.log(options);
  return options;
}

function makeJSON_(object, options) {
  if (options.format == FORMAT_PRETTY) {
    var jsonString = JSON.stringify(object, null, 4);
  } else if (options.format == FORMAT_MULTILINE) {
    var jsonString = Utilities.jsonStringify(object);
    jsonString = jsonString.replace(/},/gi, '},\n');
    jsonString = prettyJSON.replace(/":\[{"/gi, '":\n[{"');
    jsonString = prettyJSON.replace(/}\],/gi, '}],\n');
  } else {
    var jsonString = Utilities.jsonStringify(object);
  }
  if (options.language == LANGUAGE_PYTHON) {
    // add unicode markers
    jsonString = jsonString.replace(/"([a-zA-Z]*)":\s+"/gi, '"$1": u"');
  }
  return jsonString;
}

function displayText_(text) {
  const app = UiApp.createApplication().setTitle('Exported JSON');
  app.add(makeTextBox(app, 'json'));
  app.getElementById('json').setText(text);
  const ss = SpreadsheetApp.getActiveSpreadsheet(); 
  ss.show(app);
  return app; 
}

// getRowsData iterates row by row in the input range and returns an array of objects.
// Each object contains all the data for a given row, indexed by its normalized column name.
// Arguments:
//   - sheet: the sheet object that contains the data to be processed
//   - range: the exact range of cells where the data is stored
//   - columnHeadersRowIndex: specifies the row number where the column names are stored.
//       This argument is optional and it defaults to the row immediately above range; 
// Returns an Array of objects.
function getRowsData_(sheet, options) {
  const headersRange = sheet.getRange(1, 1, sheet.getFrozenRows(), sheet.getMaxColumns());
  const headers = headersRange.getValues()[0];
  const dataRange = sheet.getRange(sheet.getFrozenRows()+1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
  const objects = getObjects_(dataRange.getValues(), normalizeHeaders_(headers));
  if (options.structure == STRUCTURE_HASH) {
    const objectsById = {};
    objects.forEach(object => {
      objectsById[object.id] = object;
    });
    return objectsById;
  } else {
    return objects;
  }
}

// getColumnsData iterates column by column in the input range and returns an array of objects.
// Each object contains all the data for a given column, indexed by its normalized row name.
// Arguments:
//   - sheet: the sheet object that contains the data to be processed
//   - range: the exact range of cells where the data is stored
//   - rowHeadersColumnIndex: specifies the column number where the row names are stored.
//       This argument is optional and it defaults to the column immediately left of the range; 
// Returns an Array of objects.
function getColumnsData_(sheet, range, rowHeadersColumnIndex) {
  rowHeadersColumnIndex = rowHeadersColumnIndex || range.getColumnIndex() - 1;
  const headersTmp = sheet.getRange(range.getRow(), rowHeadersColumnIndex, range.getNumRows(), 1).getValues();
  const headers = normalizeHeaders_(arrayTranspose_(headersTmp)[0]);
  return getObjects(arrayTranspose_(range.getValues()), headers);
}


// For every row of data in data, generates an object that contains the data. Names of
// object fields are defined in keys.
// Arguments:
//   - data: JavaScript 2d array
//   - keys: Array of Strings that define the property names for the objects to create
function getObjects_(data, keys) {
  const objects = [];
  for (let i = 0; i < data.length; ++i) {
    const object = {};
    let hasData = false;
    for (let j = 0; j < data[i].length; ++j) {
      const cellData = data[i][j];
      if (isCellEmpty_(cellData)) {
        continue;
      }
      object[keys[j]] = cellData;
      hasData = true;
    }
    if (hasData) {
      objects.push(object);
    }
  }
  return objects;
}

// Returns an Array of normalized Strings.
// Arguments:
//   - headers: Array of Strings to normalize
function normalizeHeaders_(headers) {
  const keys = [];
  for (let i = 0; i < headers.length; ++i) {
    const key = normalizeHeader_(headers[i]);
    if (key.length > 0) {
      keys.push(key);
    }
  }
  return keys;
}

// Normalizes a string, by removing all alphanumeric characters and using mixed case
// to separate words. The output will always start with a lower case letter.
// This function is designed to produce JavaScript object property names.
// Arguments:
//   - header: string to normalize
// Examples:
//   "First Name" -> "firstName"
//   "Market Cap (millions) -> "marketCapMillions
//   "1 number at the beginning is ignored" -> "numberAtTheBeginningIsIgnored"
function normalizeHeader_(header) {
  let key = "";
  let upperCase = false;

  for (const letter of header) {
    if (letter == " " && key.length > 0) {
      upperCase = true;
      continue;
    }
    if (!isAlnum_(letter)) {
      continue;
    }
    if (key.length == 0 && isDigit_(letter)) {
      continue; // first character must be a letter
    }
    if (upperCase) {
      upperCase = false;
      key += letter.toUpperCase();
    } else {
      key += letter.toLowerCase();
    }
  }

  return key;
}

// Returns true if the cell where cellData was read from is empty.
// Arguments:
//   - cellData: string
function isCellEmpty_(cellData) {
  return typeof(cellData) == "string" && cellData == "";
}

// Returns true if the character char is alphabetical, false otherwise.
function isAlnum_(char) {
  return char >= 'A' && char <= 'Z' ||
    char >= 'a' && char <= 'z' ||
    isDigit_(char);
}

// Returns true if the character char is a digit, false otherwise.
function isDigit_(char) {
  return char >= '0' && char <= '9';
}

// Given a JavaScript 2d Array, this function returns the transposed table.
// Arguments:
//   - data: JavaScript 2d Array
// Returns a JavaScript 2d Array
// Example: arrayTranspose([[1,2,3],[4,5,6]]) returns [[1,4],[2,5],[3,6]].
function arrayTranspose_(data) {
  if (data.length == 0 || data[0].length == 0) {
    return null;
  }

  const ret = [];
  for (var i = 0; i < data[0].length; ++i) {
    ret.push([]);
  }

  for (var i = 0; i < data.length; ++i) {
    for (let j = 0; j < data[i].length; ++j) {
      ret[j][i] = data[i][j];
    }
  }

  return ret;
}
