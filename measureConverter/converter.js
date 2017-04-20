"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var converter = function converter(callback) {
	return function (number) {
		if (number !== "" && number !== true && number !== false && !isNaN(number)) {
			return callback(number);
		} else {
			throw new Error("Number is invalid");
		}
	};
};

var millaAKilometro = converter(function (number) {
	return number / 0.621371;
});
var kilometroAMilla = converter(function (number) {
	return number * 0.621371;
});
var libraAKilogramo = converter(function (number) {
	return number / 2.20462;
});
var kilogramoALibra = converter(function (number) {
	return number * 2.20462;
});

exports.millaAKilometro = millaAKilometro;
exports.kilometroAMilla = kilometroAMilla;
exports.libraAKilogramo = libraAKilogramo;
exports.kilogramoALibra = kilogramoALibra;
exports.default = converter;