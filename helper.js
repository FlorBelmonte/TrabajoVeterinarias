"use strict";
exports.__esModule = true;
exports.eliminarVeterinaria = exports.modificarVeterinaria = exports.crearVeterinaria = exports.cargarVeterinarias = exports.borrarProveedor = exports.modificarProveedor = exports.crearProveedor = exports.cargarProveedor = exports.modificarPaciente = exports.eliminarPaciente = exports.crearPaciente = exports.cargarPaciente = exports.modificarTelefonoCliente = exports.modificarNombreCliente = exports.borrarCliente = exports.crearCliente = exports.cargarCliente = exports.buscarPorId = exports.existeId = exports.crearNumRandom = void 0;
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
//-------Funcion para cargar clientes desdes el Gestor de archivos-----
function cargarCliente(arrCliente, elemento) {
    var datos = elemento.split(',');
    var nombre = datos[0];
    var telefono = Number(datos[1]);
    var id = crearNumRandom(1000);
    while (existeId(arrCliente, id) == true) {
        id = crearNumRandom(1000);
    }
    var nuevoCliente = new cliente_1["default"](nombre, telefono, id);
    arrCliente.push(nuevoCliente);
    return arrCliente;
}
exports.cargarCliente = cargarCliente;
//-----------Funcion para crear cliente nuevo--------
function crearCliente(arrCliente) {
    var nombre = readlineSync.question("Ingrese nombre y apellido del cliente: ");
    var telefono = readlineSync.questionInt("Ingrese el telefono del cliente: ");
    var id = crearNumRandom(1000);
    while (existeId(arrCliente, id) == true) {
        id = crearNumRandom(1000);
    }
    var nuevoCliente = new cliente_1["default"](nombre, telefono, id);
    arrCliente.push(nuevoCliente);
    return arrCliente;
}
exports.crearCliente = crearCliente;
//Funcion para borrar un cliente
function borrarCliente(arrClientes) {
    var deleteId = readlineSync.questionInt("Ingrese el id del cliente a eliminar: ");
    var ubicacion = buscarPorId(arrClientes, deleteId);
    if (ubicacion != -1) {
        arrClientes.splice(ubicacion, 1);
        console.log("Se elimino cliente correctamente");
    }
    else {
        console.log("No se encontro id ingresado");
    }
}
exports.borrarCliente = borrarCliente;
//Funciones para modificar datos de cliente
function modificarNombreCliente(arrCliente) {
    var idCliente = readlineSync.questionInt("Ingrese id del cliente a modificar el nombre: ");
    var ubicacionId = buscarPorId(arrCliente, idCliente);
    if (ubicacionId != -1) {
        var nuevoNombre = readlineSync.question("Ingrese el nuevo nombre: ");
        arrCliente[ubicacionId].setNombre(nuevoNombre);
        console.log("Se modifico exitosamente el nombre:  " + arrCliente[ubicacionId].getNombre());
    }
    else {
        console.log("No se encontro id ingresado");
    }
}
exports.modificarNombreCliente = modificarNombreCliente;
function modificarTelefonoCliente(arrCliente) {
    var idCliente = readlineSync.questionInt("Ingrese Id del cliente a modificar el numero telefonico: ");
    var ubicacionId = buscarPorId(arrCliente, idCliente);
    if (ubicacionId != -1) {
        var nuevoTelefono = readlineSync.questionInt("Ingrese nuevo numero telefonico: ");
        arrCliente[ubicacionId].setTelefono(nuevoTelefono);
        console.log("Se modifico exitosamente el numero telefonico: " + arrCliente[ubicacionId].getTelefono());
    }
    else {
        console.log("No se encontro id ingresado");
    }
}
exports.modificarTelefonoCliente = modificarTelefonoCliente;
//---------------------------FUNCION PARA PACIENTE-----------------------
//Funcion para cargar paciente desde el Gestor de Archivos
function cargarPaciente(arrPacientes, paciente, arrCliente) {
    var datos = paciente.split(',');
    var nombre = datos[0];
    var especie = datos[1];
    var idDeCliente = readlineSync.questionInt("Ingrese id del Cliente, al cual quiere asociar un paciente: ");
    var ubicacionId = buscarPorId(arrCliente, idDeCliente);
    if (ubicacionId != -1) {
        var nuevoPaciente = new paciente_1["default"](nombre, especie, idDeCliente);
        arrCliente[ubicacionId].getListaMascotas().push(nuevoPaciente);
        arrPacientes.push(nuevoPaciente);
    }
    else {
        console.log("No se encontro Id ingresado");
    }
    return arrPacientes;
}
exports.cargarPaciente = cargarPaciente;
//Funcion para crear nuevo paciente
function crearPaciente(arrCliente, arrPacientes) {
    var nombre = readlineSync.question("Ingrese el nombre del paciente: ");
    var especie = readlineSync.question("Ingrese la especie del Paciente: ");
    var idDeCliente = readlineSync.questionInt("Ingrese id del Cliente: ");
    var ubicacionId = buscarPorId(arrCliente, idDeCliente);
    if (ubicacionId != -1) {
        var nuevoPaciente = new paciente_1["default"](nombre, especie, idDeCliente);
        arrPacientes.push(nuevoPaciente);
        arrCliente[ubicacionId].getListaMascotas().push(nuevoPaciente);
    }
    else {
        console.log("No se encontro Id ingresado");
    }
    return arrPacientes;
}
exports.crearPaciente = crearPaciente;
//Funcion eliminar paciente
function eliminarPaciente(arrCliente, arrPacientes) {
    var idCliente = readlineSync.questionInt("Ingrese Id del Cliente, para eliminar paciente: ");
    var ubicacionId = buscarPorId(arrCliente, idCliente);
    if (ubicacionId != -1) {
        console.log("Lista de pacientes " + JSON.stringify(arrCliente[ubicacionId].getListaMascotas()));
        var deletPaciente = readlineSync.question("Ingrese el nombre del paciente a eliminar: ");
        var eliminar = false;
        var i = 0;
        while ((eliminar == false) && (i < arrCliente[ubicacionId].getListaMascotas().length)) {
            if (deletPaciente == arrCliente[ubicacionId].getListaMascotas()[i].getNombre()) {
                eliminar = true;
                arrCliente[ubicacionId].getListaMascotas().splice(i, 1);
            }
            else {
                i = i + 1;
            }
        }
        var eliminarEnListaGeneral = false;
        i = 0;
        while ((eliminarEnListaGeneral == false) && (i < arrPacientes.length)) {
            if ((idCliente == arrPacientes[i].getIdDelCliente()) && (deletPaciente == arrPacientes[i].getNombre())) {
                eliminarEnListaGeneral = true;
                arrPacientes.splice(i, 1);
            }
            else {
                i = i + 1;
            }
        }
        if (eliminar == true && eliminarEnListaGeneral == true) {
            console.log("Se elimino exitosamente, el paciente ingresado");
        }
        else {
            console.log("No se encontro el nombre del Paciente ingresado");
        }
    }
    else {
        console.log("El Id del cliente Ingresado no se encontro");
    }
}
exports.eliminarPaciente = eliminarPaciente;
//funcion para modificar Paciente
function modificarPaciente(arrCliente, arrPacientes) {
    var idCliente = readlineSync.questionInt("Ingrese Id del Cliente, para Modificar el paciente: ");
    var ubicacionId = buscarPorId(arrCliente, idCliente);
    if (ubicacionId != -1) {
        console.log("Lista de pacientes " + JSON.stringify(arrCliente[ubicacionId].getListaMascotas()));
        var pacienteModificar = readlineSync.question("Ingrese el nombre del paciente a Modificar: ");
        var ok = false;
        var i = 0;
        while ((ok == false) && (i < arrCliente[ubicacionId].getListaMascotas().length)) {
            if (pacienteModificar == arrCliente[ubicacionId].getListaMascotas()[i].getNombre()) {
                ok = true;
                var nuevoNombre = readlineSync.question("Ingrese el nuevo nombre del paciente: ");
                var nuevaEspecie = readlineSync.question("Ingrese nuevamente especie del paciente: ");
                arrCliente[ubicacionId].getListaMascotas()[i].setNombre(nuevoNombre);
                arrCliente[ubicacionId].getListaMascotas()[i].setEspecie(nuevaEspecie);
                console.log("modifico en el arreglo de cliente");
            }
            else {
                i = i + 1;
            }
        }
        console.log(arrPacientes);
        var ubicacion = false;
        var j = 0;
        while ((ubicacion == false) && (j < arrPacientes.length)) {
            console.log("entro el While");
            if ((idCliente == arrPacientes[j].getIdDelCliente()) && (pacienteModificar == arrPacientes[j].getNombre())) {
                console.log("entro al if");
                ubicacion = true;
                var nuevoNombre = readlineSync.question("Ingrese el nuevamente nombre del paciente: ");
                var nuevaEspecie = readlineSync.question("Ingrese nuevamente especie del paciente: ");
                arrPacientes[j].setNombre(nuevoNombre);
                arrPacientes[j].setEspecie(nuevaEspecie);
            }
            else {
                j = j + 1;
            }
        }
        if (ok == true && ubicacion == true) {
            console.log("Se modifico exitosamente, el paciente ingresado");
        }
        else {
            console.log("No se encontro el nombre del Paciente ingresado");
        }
    }
    else {
        console.log("El Id del cliente Ingresado no se encontro");
    }
}
exports.modificarPaciente = modificarPaciente;
//------------------FUNCIONES PARA PROVEEDORES-----------------
//Funcion para cargar proveedor desde el Gestor de Archivos
function cargarProveedor(arrProveedor, elemento) {
    var datos = elemento.split(',');
    var nombre = datos[0];
    var telefono = Number(datos[1]);
    var id = crearNumRandom(1000);
    while (existeId(arrProveedor, id) == true) {
        id = crearNumRandom(1000);
    }
    var nuevoProveedor = new proveedores_1["default"](nombre, telefono, id);
    arrProveedor.push(nuevoProveedor);
    return arrProveedor;
}
exports.cargarProveedor = cargarProveedor;
//Funcion para crear nuevo Proveedor
function crearProveedor(arrProveedor) {
    var nombre = readlineSync.question("Ingrese nombre y apellido del proveedor: ");
    var telefono = readlineSync.questionInt("Ingrese el telefono del proveedor: ");
    var id = crearNumRandom(1000);
    while (existeId(arrProveedor, id) == true) {
        id = crearNumRandom(1000);
    }
    var nuevoProveedor = new proveedores_1["default"](nombre, telefono, id);
    arrProveedor.push(nuevoProveedor);
    console.log(arrProveedor);
}
exports.crearProveedor = crearProveedor;
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
function borrarProveedor(proveedor) {
    var deleteId = readlineSync.questionInt("Ingrese Id a Eliminar: ");
    for (var i = 0; i < proveedor.length; i++) {
        if (deleteId === proveedor[i].getId()) {
            proveedor.splice(i, 1);
            console.log("Se elimino Proveedor con id ingresado");
        }
    }
    console.log(proveedor);
}
exports.borrarProveedor = borrarProveedor;
// ------------------------------------------Funciones para Veterinarias---------------------------------------------------- 
//Cargar Veterinarias
function cargarVeterinarias(elemento, arrVeterinaria, arrClientes, arrPacientes) {
    var datos = elemento.split(',');
    var nombre = datos[0];
    var direccion = datos[1];
    var id = crearNumRandom(1000);
    while (existeId(arrVeterinaria, id) == true) {
        id = crearNumRandom(1000);
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
    var id = crearNumRandom(1000);
    while (existeId(arrVeterinaria, id) == true) {
        id = crearNumRandom(1000);
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
//Funcion Borrar Veterinaria  
function eliminarVeterinaria(arrVeterinarias, id) {
    for (var i = 0; i < arrVeterinarias.length; i++) {
        if (id === arrVeterinarias[i].getId()) {
            arrVeterinarias.splice(i, 1);
        }
    }
    console.log(arrVeterinarias);
}
exports.eliminarVeterinaria = eliminarVeterinaria;
