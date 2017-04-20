# measure_converter (Conversor de unidades de Medidas)

Convertidor de unidades de medidas según necesidad.

## Descripción

Con este paquete puedes convertir unidades de medidas según el sistema que necesites. El conversor necesita recibir como parámetro una función que a su vez reciba como parametro un numero, y dentro de esta función crear la lógica de conversión.

El paquete viene con las siguientes conversiones ya integradas:
- De Kilometro a Milla y viceversa.
- De Kilogramo a Libra y viceversa.

## Instalación 

```
npm install measure_converter
```

## Uso

- Para convertir de metros a kilometros podrías usar:

```javascript
const conver = require('measure_converter');
const converter = conver.default;

const metroAKilometro = converter(function(number){return number*1000});
metroAKilometro(10); //10000
```

- O usar lo ya disponible:

```javascript
const conver = require('measure_converter');
const libraAKilogramo = conver.libraAKilogramo;
let convertion = libraAKilogramo(10)
convertion.toFixed(5) //4.53593
```

## Creditos

- [Edgar Valdez](https://twitter.com/edvaldez99)

## Licencia

[MIT](https://opensource.org/licenses/MIT)