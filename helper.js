"use strict";
exports.__esModule = true;
exports.crearCliente = exports.cargarCliente = exports.existeId = exports.crearNumRandom = void 0;
var readlineSync = require("readline-sync");
function crearNumRandom(max) {
    return Math.floor(Math.random() * max);
}
exports.crearNumRandom = crearNumRandom;
// Funcion para cargar Cliente 
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
function cargarCliente(arrCliente, elemento) {
    var datos = elemento.split(',');
    var nombre = datos[0];
    var telefono = Number(datos[1]);
    var id = crearNumRandom(5);
    //let e:boolean=existeId(arrCliente,id)
    while (existeId(arrCliente, id) == true) {
        id = crearNumRandom(5);
    }
    var numVisitas = 0;
    // let nuevoCliente: Cliente = new Cliente(nombre, telefono, id, numVisitas);
    // arrCliente.push(nuevoCliente)
    return arrCliente;
}
exports.cargarCliente = cargarCliente;
//Funcion para crear cliente 
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
    // let nuevoCliente : Cliente = new Cliente(nombre, telefono, id, numVisitas);
    // arrCliente.push(nuevoCliente)
    console.log(arrCliente);
}
exports.crearCliente = crearCliente;
crearCliente(listaCliente);
crearCliente(listaCliente);
crearCliente(listaCliente);
crearCliente(listaCliente);
crearCliente(listaCliente);
console.log(listaCliente);
//Funciones para Proveedores
//Funcion para cargar proveedor 
// let arregloProveedores: Proveedor[] = []
// export function cargarProveedor(arrProveedor: Array<Proveedor>,elemento: string): Array<Proveedor>{
//     let datos = elemento.split(',');
//     let nombre: string = datos[0];
//     let telefono: number = Number(datos[1]);
//     let id: number = crearNumRandom(5);
//     //let e:boolean=existeId(arrCliente,id)
//     while(existeId(arrCliente,id)==true){
//       id=crearNumRandom(5);
//     }
//     let nuevoProveedor: Proveedor = new Proveedor(nombre, telefono, id);
//     arrProveedor.push(nuevoProveedor)
//     return arrProveedor;
// }
