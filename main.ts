import * as readlineSync from 'readline-sync';

import { cargarCliente, crearCliente, crearNumRandom, existeId, cargarProveedor, crearProveedor, modificarProveedor, borrarProveedor, cargarPaciente, crearPaciente, cargarVeterinarias, crearVeterinaria, modificarVeterinaria, eliminarVeterinaria, borrarCliente, eliminarPaciente, modificarNombreCliente, modificarTelefonoCliente } from './helper';

import Cliente from './class/cliente';
import Paciente from './class/paciente';
import Proveedor from './class/proveedores';
import Veterinaria from './class/veterinaria';
import Sucursales from './class/sucursales';
import GestorDeArchivos from './class/GestorDeArchivos';
import { Console } from 'console';



//----------------------------CLIENTES----------------------
console.info("CARGAR CLIENTES DESDE EL GESTOR DE ARCHIVOS");
let listaClientes: Cliente[] = [];
let datosClientes: GestorDeArchivos = new GestorDeArchivos('./txt/clientes.txt');

for(let i : number = 0; i < datosClientes.getArregloString().length; i++){
    cargarCliente(listaClientes, datosClientes.getArregloString()[i]);
}
console.table(listaClientes);

//Funcion para cargar un nuevo Cliente

console.log("CARGAR UN NUEVO CLIENTE")
crearCliente(listaClientes);
console.table(listaClientes);

//Funciones eliminar, modificar

console.log("ELIMINAR UN CLIENTE");
borrarCliente(listaClientes);
console.log("MODIFICAR DATOS DE CLIENTES")
modificarNombreCliente(listaClientes);
modificarTelefonoCliente(listaClientes);
console.table(listaClientes);

//-------------------PACIENTES---------------

//Funcion para cargar Paciente desde el Gestor de Archivos
console.log("CARGAR PACIENTES DESDE EL GESTOR DE ARCHIVOS")

let listaGeneralMascotas: Paciente []=[];
let datosMascotas: GestorDeArchivos = new GestorDeArchivos('./txt/pacientes.txt')
for(let i : number = 0; i < datosMascotas.getArregloString().length; i++){
  cargarPaciente(listaGeneralMascotas, datosMascotas.getArregloString()[i], listaClientes);
}
console.table(listaGeneralMascotas);
console.log(JSON.stringify(listaClientes));

//Funcion para cargar un nuevo Paciente

console.info("CARGAR UN NUEVO PACIENTE");
crearPaciente(listaClientes, listaGeneralMascotas);
console.log(listaGeneralMascotas);

//Funciones eliminar

console.info("ELIMINAR PACIENTE");

eliminarPaciente(listaClientes,listaGeneralMascotas);


//------------------------VETERINARIAS------------------

console.info("CARGAR VETERINARIAS DESDE EL GESTOR DE ARCHIVOS")
let arregloVeterinarias: Veterinaria[] = []
let datosVeterinarias : GestorDeArchivos = new GestorDeArchivos('./txt/veterinarias.txt')

for(let i : number = 0; i < datosVeterinarias.getArregloString().length; i++){
    cargarVeterinarias( datosVeterinarias.getArregloString()[i], arregloVeterinarias, listaClientes, listaGeneralMascotas );
}
console.log(arregloVeterinarias);

//Funcion para cargar un nuevo Veterinaria
console.info("CARGAR UNA NUEVA VETERINARIA");
crearVeterinaria(arregloVeterinarias, listaClientes, listaGeneralMascotas);

//Funciones eliminar, modificar
console.log("ELIMINAR UNA VETERIANARIA");
eliminarVeterinaria(arregloVeterinarias, 3);
console.log("MODIFICAR UNA VETERIANARIA");
modificarVeterinaria(arregloVeterinarias, 1, listaClientes, listaGeneralMascotas);


//----------------------PROVEDORES--------------------------

console.log("CARGAR PROVEEDORES DESDE EL GESTOR DE ARCHIVOS");
let arregloProveedores: Proveedor[] = [];
let datosProveedores: GestorDeArchivos = new GestorDeArchivos('./txt/proveedores.txt');

for(let i : number = 0; i < datosProveedores.getArregloString().length; i++){
    cargarProveedor(arregloProveedores, datosProveedores.getArregloString()[i]);
}
console.table(arregloProveedores);

//Funcion para cargar un nuevo Proveedor 

console.info("CARGAR UN NUEVO PROVEEDOR");
crearProveedor(arregloProveedores);

//Funciones eliminar, modificar Proveedor

console.info("ELIMINAR UN PROVEEDOR")
borrarProveedor(arregloProveedores);
console.info("MODIFICAR UN PROVEEDOR")
modificarProveedor(arregloProveedores, 2);
