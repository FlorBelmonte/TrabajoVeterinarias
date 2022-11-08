import Cliente from "./class/cliente";
import Paciente from "./class/paciente";
import Proveedor from "./class/proveedores";
import Veterinaria from "./class/veterinaria";
import * as readlineSync from 'readline-sync';
import {Readline} from 'readline/promises'


export function crearNumRandom(max: number){
    return Math.floor(Math.random() * max)
}
// Funcion para cargar Cliente 

export function cargarCliente(arrCliente: Array<Cliente>,elemento: string): Array<Cliente>{
    let datos = elemento.split(',');
    let nombre: string = datos[0];
    let telefono: number = Number(datos[1]);
    let id: number = crearNumRandom(5)
    let numVisitas = 0;
    let nuevoCliente: Cliente = new Cliente(nombre, telefono, id, numVisitas);
    
    arrCliente.push(nuevoCliente)
    return arrCliente;
}



//Funcion para crear cliente 

let listaCliente: Cliente[] = []

export function crearCliente(arrCliente: Array<Cliente>){
    let nombre: string = readlineSync.question("Ingrese nombre y apellido del cliente: ");
    let telefono: number = readlineSync.questionInt("Ingrese el telefono del cliente: ");
    let id: number = crearNumRandom(5);
    let numVisitas: number = 0;

    for (let i = 0; i< arrCliente.length; i++){
        if (id == arrCliente[i].getId()){
            console.log("Id duplicado");
             id = crearNumRandom(5)  
        }
    }

    let nuevoCliente : Cliente = new Cliente(nombre, telefono, id, numVisitas);
    arrCliente.push(nuevoCliente)
    console.log(arrCliente)
}

crearCliente(listaCliente)
crearCliente(listaCliente)
crearCliente(listaCliente)
crearCliente(listaCliente)
crearCliente(listaCliente)

// console.log(listaCliente)

