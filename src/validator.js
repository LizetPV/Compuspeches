function validate(cardNumber) {
  const cadena = cardNumber.toString();
  const longitud = cadena.length;
  let cifra = null;
  let cifra_cad = null;
  let suma = 0;
  // aplicacion del algoritmo de luhn
  for (let i = 0; i < longitud; i += 2) {
    // bucle que recorre los elementos de la cadena cada dos posiciones
    cifra = parseInt(cadena.charAt(i)) * 2; // CharAt(i) toma un coracter de la cadena, luego a ese elemento se le convierte a entero y se multiplica por 2
    if (cifra > 9) {
      cifra_cad = cifra.toString();
      cifra = parseInt(cifra_cad.charAt(0)) + parseInt(cifra_cad.charAt(1));
    }
    suma = suma + cifra;
  }

  for (let i = 1; i < longitud; i += 2) {
    suma = suma + parseInt(cadena.charAt(i));
  }
  if (suma % 10 === 0) {
    return true;
  } else {
    return false;
  }
}
function maskify(num, n = 4, mask = "#") {
  const numOculto = num.slice(0, -n).replace(/./g, mask) + num.slice(-n);
  return numOculto;
}
const validator = {validate,maskify};
export default validator;


