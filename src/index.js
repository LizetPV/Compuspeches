import validator from "./validator.js";

const play = document.getElementById("boton");
play.addEventListener("click",  () => {
  const number = document.getElementById("cardnumber").value;
  const input = document.getElementById("cardnumber");
  if (number === "") {
    //Impedir que se ingrese si el campo esta vacio.
    document.getElementById("texVacio").innerHTML = "Todos los campos son obligatorios ";
  } else if (number.length > 16) {
    //Evitar caractereses que no sean digitos de 0 a 9.
    document.getElementById("texVacio").innerHTML = "debe ingresar 16 digitos como máximo ";
  } else if (number.length < 16) {
    //Tener un campo vacio para incertar el numero de tarjeta.
    document.getElementById("texVacio").innerHTML = "debe ingresar 16 digitos como minimo ";
  } else {
    const result = validator.validate(number);
    if (result === true) {
      document.getElementById("texVacio").innerHTML = "Numero de tarjeta correcto: " + validator.maskify(number);
      input.value = ""
    } else {
      document.getElementById("texVacio").innerHTML = "El número de tarjeta no es válido " + validator.maskify(number);
    }
  }
});
