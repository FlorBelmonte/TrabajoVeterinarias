import * as readlineSync from 'readline-sync';
import { cargarCliente, crearCliente, crearNumRandom, existeId, cargarProveedor, crearProveedor, modificarProveedor, borrarProveedor, crearPaciente, cargarVeterinarias, crearVeterinaria, modificarVeterinaria, eliminarVeterinaria, borrarCliente } from './helper';
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
    cargarCliente(listaClientes, datosProveedores.getArregloString()[i]);
}

let listaGeneralMascotas: Paciente []=[];
// crearCliente(listaClientes)
// crearCliente(listaClientes)

 console.log(listaClientes)

//Funcion para cargar Paciente desde el Gestor de Archivos

export function cargarPaciente(arrPacientes:Array <Paciente>,paciente:string){
    let datosDelGestor:string []=paciente.split(",");
  }
  
console.log(listaGeneralMascotas)

crearPaciente(listaGeneralMascotas,listaClientes)
crearPaciente(listaGeneralMascotas,listaClientes)

console.log(listaClientes)

console.log(listaGeneralMascotas)
console.log(JSON.stringify(listaClientes))

borrarCliente(listaClientes);
console.log(listaClientes)




// let arregloVeterinarias: Veterinaria[] = []
// let datosVeterinarias : GestorDeArchivos = new GestorDeArchivos('./txt/veterinarias.txt')

// for(let i : number = 0; i < datosVeterinarias.getArregloString().length; i++){
//     cargarVeterinarias( datosVeterinarias.getArregloString()[i], arregloVeterinarias, listaClientes, listaGeneralMascotas );
// }


// console.log(arregloVeterinarias)
// crearVeterinaria(arregloVeterinarias, listaClientes, listaGeneralMascotas)
// modificarVeterinaria(arregloVeterinarias, 1, listaClientes, listaGeneralMascotas)
// eliminarVeterinaria(arregloVeterinarias, 3)

