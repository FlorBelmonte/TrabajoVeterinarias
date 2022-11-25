"use strict";
exports.__esModule = true;
exports.eliminarVeterinaria = exports.modificarVeterinaria = exports.crearVeterinaria = exports.cargarVeterinarias = exports.borrarProveedor = exports.modificarProveedor = exports.crearProveedor = exports.cargarProveedor = exports.buscarPorId = exports.crearPaciente = exports.contadorVIP = exports.crearCliente = exports.listaMascotas = exports.listaClientes = exports.cargarCliente = exports.existeId = exports.crearNumRandom = void 0;
var cliente_1 = require("./class/cliente");
var paciente_1 = require("./class/paciente");
var proveedores_1 = require("./class/proveedores");
var veterinaria_1 = require("./class/veterinaria");
var readlineSync = require("readline-sync");
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
    var nuevoCliente = new cliente_1["default"](nombre, telefono, id);
    arrCliente.push(nuevoCliente);
    return arrCliente;
}
exports.cargarCliente = cargarCliente;
//-----------Funcion para crear cliente nuevo--------
exports.listaClientes = [];
exports.listaMascotas = [];
function crearCliente(arrCliente) {
    var nombre = readlineSync.question("Ingrese nombre y apellido del cliente: ");
    var telefono = readlineSync.questionInt("Ingrese el telefono del cliente: ");
    var id = crearNumRandom(5);
    while (existeId(arrCliente, id) == true) {
        id = crearNumRandom(5);
    }
    var nuevoCliente = new cliente_1["default"](nombre, telefono, id); // acá nos falta agregar una variable de tipo Paciente
    arrCliente.push(nuevoCliente);
    console.log(arrCliente);
}
exports.crearCliente = crearCliente;
//-----------Funcion para cliente VIP--------
function contadorVIP(customer) {
    var visitas = customer.getNumVisitas();
    if (visitas < 5) {
        customer.setNumVisitas(visitas++);
        console.log("El cliente aun no es VIP");
    }
    else {
        console.log("es cliente VIP");
    }
}
exports.contadorVIP = contadorVIP;
//------------------FUNCION PARA PACIENTE-----------------
//Fubcion para crear nuevo paciente
function crearPaciente(arrPacientes, arrCliente) {
    var nombre = readlineSync.question("Ingrese el nombre del paciente: ");
    var especie = readlineSync.question("Ingrese la especie del Paciente: ");
    var idDeCliente = readlineSync.questionInt("Ingrese id del Cliente: ");
    // if (existeId(arrCliente,idDeCliente)==false){
    //   let idDeCliente=readlineSync.questionInt("Id ingresado no existe, ingrese nuevmente un numero: ");
    // }
    var ubicacionId = buscarPorId(arrCliente, idDeCliente);
    var nuevoPaciente = new paciente_1["default"](nombre, especie, idDeCliente);
    arrPacientes.push(nuevoPaciente);
    arrCliente[ubicacionId].getListaMascotas().push(nuevoPaciente);
    return nuevoPaciente;
    // agregarListaMascota(nuevoPaciente) ;
    //arregloCliente.agregarListaMascota(nuevoPaciente)//Aca tengo que agregar el paciente a la lista de mascotas del Cliente
}
exports.crearPaciente = crearPaciente;
//Funcion buscar por id a un cliente
function buscarPorId(arreglo, id) {
    var ubicacion = -1;
    var ok = false;
    var i = 0;
    while ((ok == false) && (i < arreglo.length)) {
        if (id == arreglo[i].getId()) {
            ubicacion = i;
            ok = true;
        }
        else {
            i = i + 1;
        }
    }
    return ubicacion;
}
exports.buscarPorId = buscarPorId;
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
//Funcion para modificar proveedor
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
// Funciones para Veterinarias 
//Cargar Veterinarias
function cargarVeterinarias(elemento, arrVeterinaria, arrClientes, arrPacientes) {
    var datos = elemento.split(',');
    var nombre = datos[0];
    var direccion = datos[1];
    var id = crearNumRandom(5);
    while (existeId(arrVeterinaria, id) == true) {
        id = crearNumRandom(5);
    }
    var listaClientes = arrClientes;
    var listaGeneralMascotas = arrPacientes;
    var nuevaVeterinaria = new veterinaria_1["default"](nombre, direccion, id, listaClientes, listaGeneralMascotas);
    arrVeterinaria.push(nuevaVeterinaria);
    return arrVeterinaria;
}
exports.cargarVeterinarias = cargarVeterinarias;
//Crear Veterinaria
function crearVeterinaria(arrVeterinaria, arrClientes, arrPacientes) {
    var nombre = readlineSync.question("Ingrese el nombre de la veterinaria: ");
    var direccion = readlineSync.question("ingrese dirección: ");
    var id = crearNumRandom(5);
    while (existeId(arrVeterinaria, id) == true) {
        id = crearNumRandom(5);
    }
    var listaClientes = arrClientes;
    var listaGeneralMascotas = arrPacientes;
    var nuevaVeterinaria = new veterinaria_1["default"](nombre, direccion, id, listaClientes, listaGeneralMascotas);
    arrVeterinaria.push(nuevaVeterinaria);
    console.log(arrVeterinaria);
}
exports.crearVeterinaria = crearVeterinaria;
//Modificar veterinaria
function modificarVeterinaria(arrVeterinarias, posicion, arrClientes, arrPacientes) {
    var nombre = readlineSync.question("Ingrese el nuevo nombre: ");
    var direccion = readlineSync.question("ingrese nueva dirección: ");
    var id = arrVeterinarias[posicion].getId();
    var veterinariaModificada = new veterinaria_1["default"](nombre, direccion, id, arrClientes, arrPacientes);
    arrVeterinarias[posicion] = veterinariaModificada;
    console.log(arrVeterinarias);
}
exports.modificarVeterinaria = modificarVeterinaria;
//Borrar Veterinaria 
function eliminarVeterinaria(arrVeterinarias, id) {
    for (var i = 0; i < arrVeterinarias.length; i++) {
        if (id === arrVeterinarias[i].getId()) {
            arrVeterinarias.splice(i, 1);
        }
    }
    console.log(arrVeterinarias);
}
exports.eliminarVeterinaria = eliminarVeterinaria;
