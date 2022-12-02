import * as readlineSync from 'readline-sync';

import { cargarCliente, crearCliente, crearNumRandom, existeId, cargarProveedor, crearProveedor, modificarProveedor, borrarProveedor, cargarPaciente, crearPaciente, cargarVeterinarias, crearVeterinaria, modificarVeterinaria, eliminarVeterinaria, borrarCliente, eliminarPaciente } from './helper';

import Cliente from './class/cliente';
import Paciente from './class/paciente';
import Proveedor from './class/proveedores';
import Veterinaria from './class/veterinaria';
import Sucursales from './class/sucursales';
import GestorDeArchivos from './class/GestorDeArchivos';

let arregloProveedores: Proveedor[] = [];

let datosProveedores: GestorDeArchivos = new GestorDeArchivos('./txt/proveedores.txt');

// for(let i : number = 0; i < datosProveedores.getArregloString().length; i++){
//     cargarProveedor(arregloProveedores, datosProveedores.getArregloString()[i]);
// }

// console.log(arregloProveedores)
// borrarProveedor(arregloProveedores, 1)
 // modificarProveedor(arregloProveedores, 2)
// console.log(arregloProveedores)

let listaClientes: Cliente[] = [];
let datosClientes: GestorDeArchivos = new GestorDeArchivos('./txt/clientes.txt');

for(let i : number = 0; i < datosClientes.getArregloString().length; i++){
    cargarCliente(listaClientes, datosClientes.getArregloString()[i]);
}

let listaGeneralMascotas: Paciente []=[];
crearCliente(listaClientes)
crearCliente(listaClientes)

 console.log(listaClientes)

//Funcion para cargar Paciente desde el Gestor de Archivos
console.log("Gestor de archivo de Pacientes")

let datosMascotas: GestorDeArchivos = new GestorDeArchivos('./txt/pacientes.txt')
for(let i : number = 0; i < datosMascotas.getArregloString().length; i++){
  cargarPaciente(listaGeneralMascotas, datosMascotas.getArregloString()[i], listaClientes);
}
// crearPaciente(listaGeneralMascotas, listaClientes)
console.log(listaClientes)



// console.log(listaGeneralMascotas)
// console.log(JSON.stringify(listaClientes))


// borrarCliente(listaClientes);
// console.log(listaClientes)
// modificarNombreCliente(listaClientes)
// console.log(listaClientes)
// modificarTelefonoCliente(listaClientes)
console.log(listaClientes)
console.log(JSON.stringify(listaClientes))
eliminarPaciente(listaClientes,listaGeneralMascotas)





// let arregloVeterinarias: Veterinaria[] = []
// let datosVeterinarias : GestorDeArchivos = new GestorDeArchivos('./txt/veterinarias.txt')

// for(let i : number = 0; i < datosVeterinarias.getArregloString().length; i++){
//     cargarVeterinarias( datosVeterinarias.getArregloString()[i], arregloVeterinarias, listaClientes, listaGeneralMascotas );
// }


// console.log(arregloVeterinarias)
// crearVeterinaria(arregloVeterinarias, listaClientes, listaGeneralMascotas)
// modificarVeterinaria(arregloVeterinarias, 1, listaClientes, listaGeneralMascotas)
// eliminarVeterinaria(arregloVeterinarias, 3)

