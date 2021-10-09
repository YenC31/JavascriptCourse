function creaUsuario() {
  var nombre = prompt("Ingrese su nombre: ", "");
  var apellido = prompt("Ingrese su apellido: ", "");
  var numero = prompt("Ingrese un Numero: ", "");
  var password = prompt("Ingrese su passsword: ", "");
  var cuenta = new nuevoUsuario(nombre, apellido, numero, password);
  cuenta.mostrarDatos();
}

function nuevoUsuario(nombre, apellido, numero, password) {
  this.firtsName = nombre;
  this.lastName = apellido;
  this.numero = numero;
  this.password = password;

  this.mostrarDatos = function () {
    var msg = "Usuario Creado Satisfactoriamente ";

    msg =
      msg +
      "A continuacion muestro los datos: User: " +
      this.firtsName +
      this.lastName +
      this.numero +
      "@miredsocial.com" +
      "---- Este es su password: " +
      this.password;

    alert(msg);
  };
}
