const expect = require('chai').expect;
const conver = require('..');
const converter = conver.default;
const kilometroAMilla = conver.kilometroAMilla;
const millaAKilometro = conver.millaAKilometro;
const libraAKilogramo = conver.libraAKilogramo;
const kilogramoALibra = conver.kilogramoALibra;

describe('#converter', function () {

  it('Convertir 10 kilometro a milla', function () {
    const convertion = kilometroAMilla(10);
    expect(convertion.toFixed(5)).to.equal('6.21371');
  });

  it('Convertir milla a kilometro', function () {
    const convertion = millaAKilometro(10)
    expect(convertion.toFixed(5)).to.equal('16.09344')

  });

	it('Convertir libra a kilogramo', function () {
    const convertion = libraAKilogramo(10)
    expect(convertion.toFixed(5)).to.equal('4.53593')

  });

  it('Convertir kilogramo a libra', function () {
    const convertion = kilogramoALibra(10);
    expect(convertion.toFixed(5)).to.equal('22.04620');
  });

  it('Convertir kilometro a metro', function () {
    const convertion = converter(function(number){return number*1000})(10);
    expect(convertion).to.equal(10000);
  });

  it('Convertir metro a kilometro', function () {
    const convertion = converter(function(number){return number/1000})(10000);
    expect(convertion).to.equal(10);
  });

});