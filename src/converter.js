const converter = callback => number => {
	if (number !== "" && number !== true && number !== false && !isNaN(number)) {
		return callback(number);
	}else{
		throw new Error("Number is invalid");
	}
}

const millaAKilometro = converter(number => (number/0.621371));
const kilometroAMilla = converter(number => (number*0.621371));
const libraAKilogramo = converter(number => (number/2.20462));
const kilogramoALibra = converter(number => (number*2.20462));

export { millaAKilometro, kilometroAMilla, libraAKilogramo, kilogramoALibra };

export default converter