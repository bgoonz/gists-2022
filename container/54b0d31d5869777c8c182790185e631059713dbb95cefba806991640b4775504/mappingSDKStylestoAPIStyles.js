export const colours =[
  '#f5f6f8', // grey
  '#fff9b1', // yellow
  '#f5d128', // dark orange
  '#d0e17a', // light green
  '#d5f692', // lighter green
  '#a6ccf5', // light blue
  '#67c6c0', // torquise
  '#23bfe7', // blue
  '#ff9d48', // orange
  '#ea94bb', // rose
  '#f16c7f', // red
  '#b384bb', // purple
  'transparent', // transparent (non-sticker only)
]

export const fonts = [
  "Arial",
  "Abril Fatface",
  "Bangers",
  "EB Garamond",
  "Georgia",
  "Graduate",
  "Gravitas One",
  "Fredoka One",
  "Nixie One",
  "OpenSans",
  "Permanent Marker",
  "PT Sans",
  "PT Sans Narrow",
  "PT Serif",
  "Rammetto One",
  "Roboto", 
  "Roboto Condensed",
  "Roboto Slab",
  "Caveat",
  "Times New Roman",
  "Titan One",
  "Lemon Tuesday",
  "Roboto Mono",
  "Noto Sans",
  "IBM Plex Sans",
  "IBM Plex Serif", 
  "IBM Plex Mono"
]

export const shapeFonts = {
  '0': 'Arial',
  '2': 'Abril Fatface',
  '3': 'Bangers',
  '4': 'EB Garamond',
  '5': 'Georgia',
  '6': 'Graduate',
  '7': 'Gravitas One',
  '8': 'Fredoka One',
  '9': 'Nixie One',
  '10': 'OpenSans',
  '11': 'Permanent Marker',
  '12': 'PT Sans',
  '13': 'PT Sans Narrow',
  '14': 'PT Serif',
  '15':'Rammetto One',
  '16': 'Roboto',
  '17': 'Roboto Condensed',
  '18': 'Roboto Slab',
  '19': 'Caveat',
  '20': 'Times New Roman',
  '21': 'Titan One',
  '22': 'Lemon Tuesday',
  '23': 'Roboto Mono',
  '24': 'Noto Sans',
  '25': 'IBM Plex Sans',
  '26': 'IBM Plex Serif',
  '27': 'IBM Plex Mono',
  '28': 'Spoof',
  '29': 'Tiempos Text'
}

export const borderStyles = {
  '2': 'normal'
  '1': 'dashed'
  '0': 'dotted'
}

export const shapeTypes = {
  '3': "rectangle",
  '4': "circle",
  '5': "triangle",
  '7': "rounded_rectangle",
  '8': "rhombus",
  '6': "callout",
  '10': "parallelogram",
  '11': "star",
  '12': "arrow",
  '13': "arrow_left",
  '16': "pentagon",
  '17': "hexagon",
  '18': "octagon",
  '19': "trapeze",
  '20': "predefined_process",
  '21': "arrow_left_right",
  '22': "cloud",
  '23': "brace_left",
  '24': "brace_right",
  '25': "cross",
  '26': "barrel"
}

export const textAlign = {
  l: "left",
  c: "center",
  r: "right",
}

export const verticalTextAlign = {
  t: "top",
  m: "middle",
  b: "bottom"
}

export const lineTypes = {
  '0': 'straight',
  '1': 'orthogonal',
  '2': 'bezier',
  '3': 'sketch'
}

export const endTypes = {
  '0': "none",
  '1': "opaque_block",
  '2': "rhombus",
  '3': "opaque_rhombus",
  '4': "circle", 
  '5': "opaque_circle",
  '6': "block",
  '7': "open_arrow",
  '8': "opaque_arrow"
}

function mapOpacity(opacity) {
  if (opacity >= 1) {
    return 1
  } else if (opacity < 1 && opacity >= 0.75) {
    return 0.75
  } else if (opacity < 0.75 && opacity >= 0.5) {
    return 0.5
  } else if (opacity < 0.5 && opacity >= 0.25) {
    return 0.25
  } else {
    return 0
  }
}

function mapBorderWidth(width) {
  if (width >= 24) {
    return 24
  } else if (width < 24 && width >= 16) {
    return 16
  } else if (width < 16 && width >= 8) {
    return 8
  } else if (width < 8 && width >= 4) {
    return 4
  } else {
    return 2
  }
}

 function mapLineThickness(width) {
  if (width >= 24) {
    return 24
  } else if(width < 24 && width >= 20) {
    return 20
  } else if (width < 20 && width >= 16) {
    return 16
  } else if (width < 16 && width >= 12) {
    return 12
  } else if (width < 16 && width >= 8) {
    return 8
  } else if (width < 8 && width >= 5) {
    return 5
  } else if (width < 5 && width >= 4) {
    return 4
  } else if (width < 4 && width >= 3) {
    return 3
  } else if (width < 3 && width >= 2) {
    return 2
  } else {
    return 1
  }
}

function mapColour(colour) {
  if (colours.includes(colour)) {
    return colour
  }
  switch(colour) {
    case '#c9df56': // Map yellow green to light green
      return '#d5f692'
    case '#93d275':
      return '#d0e17a' // Map green to light green
    case '#6cd8fa':
      return '#a6ccf5' // Map azure to light blue
    case '#7b92ff':
      return '#23bfe7' // Map blue to API blue
    case '#be88c7':
      return '#b384bb' // Map purple to API purple
    default:
      return '#fff9b1' // Map anything else to yellow
  }
}

function getBorderOpacity(opacity, color, width) {
  if (color === 'transparent' || width === 0) {
    return 0.0
  }
  return mapOpacity(opacity)
}

export function normaliseStickerStyle(style) {
  return {
    backgroundColor: mapColour(style.stickerBackgroundColor),
    fontFamily: 'OpenSans', // Turns out the Miro API lies and only supports this font!
    fontSize: style.fontSize,
    textAlign: textAlign[style.textAlign],
    textAlignVertical: verticalTextAlign[style.textAlignVertical]
  }
}

export function normaliseShapeStyle(style) {
  return {
    backgroundColor: style.backgroundColor !== 'transparent' ? style.backgroundColor : '#000000',
    backgroundOpacity: style.backgroundColor !== 'transparent' ? mapOpacity(style.backgroundOpacity) : 0.0,
    borderColor: style.borderColor !== 'transparent' ? style.borderColor : '#000000',
    borderOpacity: getBorderOpacity(style.borderOpacity, style.borderColor, style.borderWidth),
    borderStyle: borderStyles[`${style.borderStyle}`],
    borderWidth: mapBorderWidth(style.borderWidth),
    fontFamily: shapeFonts[`${style.fontFamily}`],
    fontSize: style.fontSize,
    shapeType: shapeTypes[`${style.shapeType}`],
    textAlign: textAlign[style.textAlign],
    textAlignVertical: verticalTextAlign[style.textAlignVertical],
    textColor: style.textColor
  }
}

export function normaliseTextStyle(style, scale) {
  return {
    backgroundColor: style.backgroundColor !== 'transparent' ? style.backgroundColor : '#000000',
    backgroundOpacity: style.backgroundColor !== 'transparent' ? mapOpacity(style.backgroundOpacity) : 0.0,
    fontFamily: shapeFonts[`${style.fontFamily}`],
    fontSize: ((14 * scale) | 0),
    textAlign: textAlign[style.textAlign],
    textColor: style.textColor
  }
}

export function normaliseLineStyle(style) {
  return {
    borderColor: style.lineColor,
    borderStyle: borderStyles[`${style.lineStyle}`],
    borderWidth: mapLineThickness(style.lineThickness),
    lineEndType: endTypes[`${style.lineEndStyle}`],
    lineStartType: endTypes[`${style.lineStartStyle}`],
    lineType: lineTypes[`${style.lineType}`]
  }
}

export function normaliseCardStyle(style) {
  return {
    backgroundColor: style.backgroundColor
  }
}