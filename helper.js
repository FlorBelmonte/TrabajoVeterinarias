"use strict";
exports.__esModule = true;
exports.borrarProveedor = exports.modificarProveedor = exports.crearProveedor = exports.cargarProveedor = exports.cargarPaciente = exports.crearPaciente = exports.crearCliente = exports.cargarCliente = exports.existeId = exports.crearNumRandom = void 0;
var cliente_1 = require("./class/cliente");
var paciente_1 = require("./class/paciente");
var proveedores_1 = require("./class/proveedores");
var readlineSync = require("readline-sync");
//import {Readline} from 'readline/promises'
function crearNumRandom(max) {
    return Math.floor(Math.random() * max);
}
exports.crearNumRandom = crearNumRandom;
// -----------------FUNCION PARA CLIENTES------------------
//funcion para verificar si id existe
function existeId(arreglo, id) {
    var existe = false;
    var i = 0;
    while ((existe == false) && (i < arreglo.length)) {
        if (id == arreglo[i].getId()) {
            existe = true;
        }
        i = i + 1;
    }
    return existe;
}
exports.existeId = existeId;
//-------Funcion para cargar clientes desdes el Gestor de archivos-----
function cargarCliente(arrCliente, elemento) {
    var datos = elemento.split(',');
    var nombre = datos[0];
    var telefono = Number(datos[1]);
    var id = crearNumRandom(5);
    while (existeId(arrCliente, id) == true) {
        id = crearNumRandom(5);
    }
    var numVisitas = 0;
    var nuevoCliente = new cliente_1["default"](nombre, telefono, id, numVisitas);
    arrCliente.push(nuevoCliente);
    return arrCliente;
}
exports.cargarCliente = cargarCliente;
//-----------Funcion para crear cliente nuevo--------
var listaCliente = [];
var listaMascotas = [];
function crearCliente(arrCliente) {
    var nombre = readlineSync.question("Ingrese nombre y apellido del cliente: ");
    var telefono = readlineSync.questionInt("Ingrese el telefono del cliente: ");
    var id = crearNumRandom(5);
    var numVisitas = 0;
    while (existeId(arrCliente, id) == true) {
        id = crearNumRandom(5);
    }
    var nuevoCliente = new cliente_1["default"](nombre, telefono, id, numVisitas); // acá nos falta agregar una variable de tipo Paciente
    arrCliente.push(nuevoCliente);
    console.log(arrCliente);
}
exports.crearCliente = crearCliente;
//------------------FUNCION PARA PACIENTE-----------------
//Fubcion para crear nuevo paciente
function crearPaciente(arrPacientes, arrCliente) {
    var nombre = readlineSync.question("Ingrese el nombre del paciente: ");
    var especie = readlineSync.question("Ingrese la especie del Paciente: ");
    var idDeCliente = readlineSync.questionInt("Ingrese id del Cliente: ");
    var nuevoPaciente = new paciente_1["default"](nombre, especie, idDeCliente);
    arrPacientes.push(nuevoPaciente);
    listaMascotas.push(nuevoPaciente);
}
exports.crearPaciente = crearPaciente;
//Funcion para cargar Paciente desde el Gestor de Archivos
function cargarPaciente(arrPacientes, paciente) {
    var datosDelGestor = paciente.split(",");
}
exports.cargarPaciente = cargarPaciente;
//------------------FUNCIONES PARA PROVEEDORES-----------
//Funcion para cargar proveedor 
var arregloProveedores = [];
function cargarProveedor(arrProveedor, elemento) {
    var datos = elemento.split(',');
    var nombre = datos[0];
    var telefono = Number(datos[1]);
    var id = crearNumRandom(5);
    while (existeId(arrProveedor, id) == true) {
        id = crearNumRandom(5);
    }
    var nuevoProveedor = new proveedores_1["default"](nombre, telefono, id);
    arrProveedor.push(nuevoProveedor);
    return arrProveedor;
}
exports.cargarProveedor = cargarProveedor;
function crearProveedor(arrProveedor) {
    var nombre = readlineSync.question("Ingrese nombre y apellido del proveedor: ");
    var telefono = readlineSync.questionInt("Ingrese el telefono del proveedor: ");
    var id = crearNumRandom(5);
    while (existeId(arrProveedor, id) == true) {
        id = crearNumRandom(5);
    }
    var nuevoProveedor = new proveedores_1["default"](nombre, telefono, id);
    arrProveedor.push(nuevoProveedor);
}
exports.crearProveedor = crearProveedor;
console.log(arregloProveedores);
// //Funcion para modificar proveedor
function modificarProveedor(arregloProveedores, posicion) {
    var nombre = readlineSync.question("Ingrese el nombre modificado: ");
    var telefono = readlineSync.questionInt("Ingrese el nuevo telefono: ");
    var id = arregloProveedores[posicion].getId();
    var proveedorModificado = new proveedores_1["default"](nombre, telefono, id);
    delete arregloProveedores[posicion];
    arregloProveedores[posicion] = proveedorModificado;
    console.log(arregloProveedores);
}
exports.modificarProveedor = modificarProveedor;
//Funcion para borrar Proveedor 
function borrarProveedor(proveedor, id) {
    for (var i = 0; i < proveedor.length; i++) {
        if (id === proveedor[i].getId()) {
            proveedor.splice(i, 1);
        }
    }
    console.log(proveedor);
}
exports.borrarProveedor = borrarProveedor;
// crearProveedor(arregloProveedores)
// crearProveedor(arregloProveedores)
// crearProveedor(arregloProveedores)
// crearProveedor(arregloProveedores)
// crearProveedor(arregloProveedores)
// console.log(arregloProveedores)
// borrarProveedor(arregloProveedores, 2)
// console.log(arregloProveedores)
