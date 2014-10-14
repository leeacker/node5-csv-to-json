var express = require('express');
var fs = require('fs');
var _ = require('underscore');
var app = express();

// Write a node script that converts a csv (comma-separated values) file to json.
// If this is your input file:

// name,age,city
// Rene,35,Vancouver
// Thomas,29,Portland
// Lexi,28,Seattle
// Then you should be able to convert it to the following JSON:

// [{ "name": "Rene", "age": "35", "city": "Vancouver" },
// { "name": "Thomas", "age": "29", "city": "Portland" },
// { "name": "Lexi", "age": "28", "city": "Seattle" }]
// With this command:

// $ node csv-to-json.js input.csv output.js
// 
var fromFile = process.argv[2];
var toFile = process.argv[3];
var csvContent = fs.readFileSync(fromFile, 'utf-8');

var linesArray = csvContent.split('\n');
var objectKeys = linesArray[0].split(',');
var objectValues = linesArray.slice(1);
var totalKeys = objectKeys.length;
var totalObjects = objectValues.length;
var jsonArray = [];


for(var i = 0 ; i < totalObjects ; i++){
	var currentObject = objectValues[i].split(',');
	var newObject = {};

	for(var b = 0 ; b < totalKeys ; b++){
		var key = objectKeys[b];
		var value = currentObject[b];
		newObject[key] = value;
	}
	jsonArray.push(newObject);
}


var contentOutput = JSON.stringify(jsonArray);

fs.writeFileSync(toFile, contentOutput);








// var server = app.listen(4103, function() {
// 	console.log('Express server listening on port ' + server.address().port);
// });
