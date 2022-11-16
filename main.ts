import * as readlineSync from 'readline-sync';
import { cargarCliente, crearCliente, crearNumRandom, existeId , cargarProveedor, crearProveedor, modificarProveedor, borrarProveedor} from "./helper";
import Cliente from './class/cliente';
import Paciente from './class/paciente';
import Proveedor from './class/proveedores';
import Veterinaria from './class/veterinaria';
import GestorDeArchivos from './class/GestorDeArchivos';

let arregloProveedores: Proveedor[] = [];

let datosProveedores: GestorDeArchivos = new GestorDeArchivos('./txt/proveedores.txt');

for(let i : number = 0; i < datosProveedores.getArregloString().length; i++){
    cargarProveedor(arregloProveedores, datosProveedores.getArregloString()[i]);
}

crearProveedor(arregloProveedores)
console.log(arregloProveedores)

