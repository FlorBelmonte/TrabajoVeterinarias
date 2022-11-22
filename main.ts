import * as readlineSync from 'readline-sync';
import { cargarCliente, crearCliente, crearNumRandom, existeId, cargarProveedor, crearProveedor, modificarProveedor, borrarProveedor, crearPaciente } from './helper';
import Cliente from './class/cliente';
import Paciente from './class/paciente';
import Proveedor from './class/proveedores';
import Veterinaria from './class/veterinaria';
import Sucursales from './class/sucursales';
import GestorDeArchivos from './class/GestorDeArchivos';

// let arregloProveedores: Proveedor[] = [];

// let datosProveedores: GestorDeArchivos = new GestorDeArchivos('./txt/proveedores.txt');

// for(let i : number = 0; i < datosProveedores.getArregloString().length; i++){
//     cargarProveedor(arregloProveedores, datosProveedores.getArregloString()[i]);
// }

// console.log(arregloProveedores)
// borrarProveedor(arregloProveedores, 1)
// // modificarProveedor(arregloProveedores, 2)
// console.log(arregloProveedores)

let listaClientes: Cliente[] = [];
let listaGeneralMascotas: Paciente []=[];
crearCliente(listaClientes)
crearCliente(listaClientes)

console.log(listaClientes)

crearPaciente(listaGeneralMascotas,listaClientes)
console.log(listaClientes)
console.log(listaGeneralMascotas)




// let datosClientes: GestorDeArchivos = new GestorDeArchivos('./txt/clientes.txt');

// for(let i : number = 0; i < datosClientes.getArregloString().length; i++){
//     cargarCliente(listaCliente, datosProveedores.getArregloString()[i]);
// }

console.log(arregloProveedores)
borrarProveedor(arregloProveedores, 1)
// modificarProveedor(arregloProveedores, 2)
console.log(arregloProveedores)