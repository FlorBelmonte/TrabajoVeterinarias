"use strict";
exports.__esModule = true;
exports.crearCliente = exports.cargarCliente = exports.existeId = exports.crearNumRandom = void 0;
var cliente_1 = require("./class/cliente");
var readlineSync = require("readline-sync");
function crearNumRandom(max) {
    return Math.floor(Math.random() * max);
}
exports.crearNumRandom = crearNumRandom;
// Funcion para cargar Cliente 
//funcion para verificar si id existe
function existeId(arrCliente, id) {
    var existe = false;
    var i = 0;
    while ((existe == false) && (i < arrCliente.length)) {
        if (id == arrCliente[i].getId()) {
            existe = true;
        }
        i = i + 1;
    }
    return existe;
}
exports.existeId = existeId;
function cargarCliente(arrCliente, elemento, paciente) {
    var datos = elemento.split(',');
    var nombre = datos[0];
    var telefono = Number(datos[1]);
    var id = crearNumRandom(5);
    //let e:boolean=existeId(arrCliente,id)
    while (existeId(arrCliente, id) == true) {
        id = crearNumRandom(5);
    }
    var numVisitas = 0;
    var nuevoCliente = new cliente_1["default"](nombre, telefono, id, numVisitas, paciente);
    arrCliente.push(nuevoCliente);
    return arrCliente;
}
exports.cargarCliente = cargarCliente;
//Funcion para crear cliente 
var listaCliente = [];
var listaPaciente = [];
function crearCliente(arrCliente, listaPaciente) {
    var nombre = readlineSync.question("Ingrese nombre y apellido del cliente: ");
    var telefono = readlineSync.questionInt("Ingrese el telefono del cliente: ");
    var id = crearNumRandom(5);
    var numVisitas = 0;
    while (existeId(arrCliente, id) == true) {
        id = crearNumRandom(5);
    }
    var nuevoCliente = new cliente_1["default"](nombre, telefono, id, numVisitas, listaPaciente);
    arrCliente.push(nuevoCliente);
    console.log(arrCliente);
}
exports.crearCliente = crearCliente;
crearCliente(listaCliente, listaPaciente);
crearCliente(listaCliente, listaPaciente);
crearCliente(listaCliente, listaPaciente);
crearCliente(listaCliente, listaPaciente);
crearCliente(listaCliente, listaPaciente);
console.log(listaCliente);
