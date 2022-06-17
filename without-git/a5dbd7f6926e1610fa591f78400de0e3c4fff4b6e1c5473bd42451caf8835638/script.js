hljs.initHighlightingOnLoad();
var SPACE = '    ';
function toProperty(name){
 
 	if(name.charAt(0) == "-") name = name.slice(0);

	return name.replace(/[^a-z0-9]([a-z0-9])?/gi, function(v, l){
	       if(l) return l.toUpperCase();
	       return "";
	}) ;

}

function toSelectors(name){
	var names = name.split(",");

	return names.map(function(name){
    name = name.trim();
		var newName = "";

		if(name.charAt(0) == "."){
			newName += "Class";
			name = name.slice(1);
		}else if(name.charAt(0) == "#"){
			newName += "Id";
			name = name.slice(1);
		}else{
			newName += "Element";
		}

		return name.replace(/([^a-z0-9])([a-z0-9])?/gi, function(v, c, l){
		       if(l) return (c == "," || c == " ") ?  l.toLowerCase() : l.toUpperCase();
		       return "";
		}) + newName;

	});

}

function tokenizer(code){

	var tokens = [];
	var token = '';
	var whitespc = ['\r\n', '\n\r', '\n', '\r'];
	var lastChar = '\0';
	var nextChar = '\0';
	var char = '\0';
	var specialChars = ["{","}",":",";"];
	var specialCharsPB = ["{","}",";"];
	var sc = null;
	var inBrackets = false;

	for(var i = 0; i < code.length; i++){

		if(i) lastChar = code.charAt(i-1);
		char = code.charAt(i);
		if(i+1 < code.length) nextChar = code.charAt(i+1);

		if(~whitespc.indexOf(char) && ~whitespc.indexOf(lastChar)){
			continue;
		}
 
		sc = inBrackets ? specialChars : specialCharsPB;

		

		if(~sc.indexOf(char)){
			if(char == "{") inBrackets = true;
			if(char == "}") inBrackets = false;
			tokens.push(token);
			tokens.push(char);
			token = '';			
			continue;
		}

		token += char;

	}

	if(token) tokens.push(token);


	return tokens
			.map(function(token){ return token.trim(); })
			.filter(function(token){ return token; });

}

function repeat(char, times){
	if(times) return repeat(char, times-1) + char;
	return "";
}

function convertoToJS(tokens){

	var items = [];
	var actualItem = null;
	var actualProp = null;
	debugger;
	function readSelector(token){

		 
		var selectors = toSelectors(token);

		actualItem = {
			originalValue: token,
			selectors: selectors,
			values: {}
		};

 		actualProp = null;
 		items.push(actualItem);

		return readBracketO;
	}

	function readBracketO(token){

		if(token != "{") throw new Error("Era esperado um '{' ");

		return readProperty;
	}

	function readBracketC(token){
		if(token != "}") throw new Error("Era esperado um '}' ");
		return readSelector;
	}

	function readDefinition(token){
		if(token != ":") throw new Error("Era esperado um ':' ");

		return readValue;
	}

	function readProperty(token){

		if(token == "}") return readBracketC(token);

		var property = toProperty(token);
 		actualProp = property;

		if(!actualItem.values[property]){
			actualItem.values[property] = [];
		}

		return readDefinition;
	}

	function readValue(token){

		actualItem.values[actualProp].push(token);

		return readFinal;
	}

	function readFinal(token){
		if(token == "}") return readBracketC(token);
		if(token != ";")  throw new Error("Era esperado um ';' ");
		return readProperty;
	}

 
	var nextAction = readSelector;
	var i = 0;
	tokens.forEach(function(token){
		i++;
		console.log("processing " + i);
		nextAction = nextAction(token);		

	});

	return renderJS(items);

}

function renderJS(items){

	var objects = ["var styles = {"];
	objects = objects.concat(items.map(renderItem).join(","));
	objects.push("}");
	return objects.join("\n");
}

function renderItem(item){

	var code = ["\n//" + item.originalValue];

	var properties = [];

	for(var prop in item.values){

		var propitem = {
			name: prop,
			value: item.values[prop][item.values[prop].length - 1]
		};
		var markup = '"';
		if(~propitem.value.indexOf('"')) {
      markup = "'";
      propitem.value = propitem.value.replace(/'/gi, "\\'");
    }
		properties.push(SPACE + SPACE +  propitem.name + ": " + markup + propitem.value + markup);

	}

	properties = properties.map(function(x){ return SPACE +  x; });

	item.selectors.forEach(function(i){

		code.push(SPACE + i + ": {");
		code.push(properties.join(",\n"));
		code.push(SPACE + "}");

	});

	return code.join("\n");

}

var txt = document.querySelector("textarea");
var code = document.querySelector("code");


txt.addEventListener("change", function(){

	window.tokens = tokenizer(txt.value);
	code.textContent = convertoToJS(window.tokens);
});


