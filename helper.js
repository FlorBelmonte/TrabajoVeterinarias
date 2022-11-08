"use strict";
exports.__esModule = true;
exports.crearCliente = exports.crearNumRandom = void 0;
var cliente_1 = require("./class/cliente");
var readlineSync = require("readline-sync");
function crearNumRandom(max) {
    return Math.floor(Math.random() * max);
}
exports.crearNumRandom = crearNumRandom;
// Funcion para cargar Cliente 
//Funcion para crear cliente 
var listaCliente = [];
function crearCliente(arrCliente) {
    var nombre = readlineSync.question("Ingrese nombre y apellido del cliente: ");
    var telefono = readlineSync.questionInt("Ingrese el telefono del cliente: ");
    var id = crearNumRandom(5);
    var numVisitas = 0;
    for (var i = 0; i < arrCliente.length; i++) {
        if (id == arrCliente[i].getId()) {
            console.log("Id duplicado");
            id = crearNumRandom(5);
        }
    }
    var nuevoCliente = new cliente_1["default"](nombre, telefono, id, numVisitas);
    arrCliente.push(nuevoCliente);
    console.log(arrCliente);
}
exports.crearCliente = crearCliente;
crearCliente(listaCliente);
crearCliente(listaCliente);
crearCliente(listaCliente);
crearCliente(listaCliente);
crearCliente(listaCliente);
// console.log(listaCliente)
