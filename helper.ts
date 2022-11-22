import Cliente from "./class/cliente";
import Paciente from './class/paciente';
import Proveedor from "./class/proveedores";
import Veterinaria from "./class/veterinaria";
import Sucursales from "./class/sucursales";
import * as readlineSync from 'readline-sync';
//import {Readline} from 'readline/promises'


export function crearNumRandom(max: number){
    return Math.floor(Math.random() * max)
}


// -----------------FUNCION PARA CLIENTES------------------

//funcion para verificar si id existe
 export function existeId(arreglo:Array<Cliente|Proveedor|Veterinaria>,id:number):boolean{
    let existe:boolean= false;
    let i:number=0;
    while((existe==false)&&(i<arreglo.length)){
        if(id==arreglo[i].getId()){
            existe=true
        }
        i=i+1
    }
    return existe
 }

//-------Funcion para cargar clientes desdes el Gestor de archivos-----
 
export function cargarCliente(arrCliente: Array<Cliente>,elemento: string){
    let datos = elemento.split(',');
    let nombre: string = datos[0];
    let telefono: number = Number(datos[1]);
    let id: number = crearNumRandom(5);
    
    while(existeId(arrCliente,id)==true){
      id=crearNumRandom(5);
    }
    let numVisitas = 0;
    
    let nuevoCliente: Cliente = new Cliente(nombre, telefono, id, numVisitas);
    
    arrCliente.push(nuevoCliente)
    return arrCliente;
}

//-----------Funcion para crear cliente nuevo--------

let listaCliente: Cliente[] = []
let listaMascotas: Paciente[] = []

export function crearCliente(arrCliente: Array<Cliente>){
    let nombre: string = readlineSync.question("Ingrese nombre y apellido del cliente: ");
    let telefono: number = readlineSync.questionInt("Ingrese el telefono del cliente: ");
    
    let id: number = crearNumRandom(5);
    let numVisitas: number = 0;
    while(existeId(arrCliente,id)==true){
      id=crearNumRandom(5);
    }
    
    let nuevoCliente : Cliente = new Cliente(nombre, telefono, id, numVisitas, ); // acá nos falta agregar una variable de tipo Paciente
    arrCliente.push(nuevoCliente)
    console.log(arrCliente)
}

//------------------FUNCION PARA PACIENTE-----------------

//Fubcion para crear nuevo paciente
export function crearPaciente(arrPacientes:Array <Paciente>,arregloCliente:Array <Cliente>){
  let nombre:string=readlineSync.question("Ingrese el nombre del paciente: ");
  let especie:string=readlineSync.question("Ingrese la especie del Paciente: ");
  let idDeCliente=readlineSync.questionInt("Ingrese id del Cliente: ");

  let nuevoPaciente:Paciente=new Paciente(nombre,especie,idDeCliente);
  arrPacientes.push(nuevoPaciente);
  //arregloCliente.agregarListaMascota(nuevoPaciente)//Aca tengo que agregar el paciente a la lista de mascotas del Cliente


//Funcion para cargar Paciente desde el Gestor de Archivos

export function cargarPaciente(arrPacientes:Array <Paciente>,paciente:string){
  let datosDelGestor:string []=paciente.split(",");
}

//------------------FUNCIONES PARA PROVEEDORES-----------

//Funcion para cargar proveedor 
let arregloProveedores: Proveedor[] = []

export function cargarProveedor(arrProveedor: Array<Proveedor>,elemento: string): Array<Proveedor>{
    let datos = elemento.split(',');
    let nombre: string = datos[0];
    let telefono: number = Number(datos[1]);
    let id: number = crearNumRandom(5);

    while(existeId(arrProveedor,id)==true){
      id=crearNumRandom(5);
    }
    let nuevoProveedor: Proveedor = new Proveedor(nombre, telefono, id);
    
    arrProveedor.push(nuevoProveedor)
    return arrProveedor;
}
  export function crearProveedor(arrProveedor: Array<Proveedor>){
        let nombre: string = readlineSync.question("Ingrese nombre y apellido del proveedor: ");
        let telefono: number = readlineSync.questionInt("Ingrese el telefono del proveedor: ");
    
        let id: number = crearNumRandom(5);
        while(existeId(arrProveedor,id)==true){
          id=crearNumRandom(5);
        }
        let nuevoProveedor: Proveedor = new Proveedor(nombre, telefono, id)
        arrProveedor.push(nuevoProveedor)
    }


console.log(arregloProveedores)
//Funcion para modificar proveedor
export function modificarProveedor(arregloProveedores: Array<Proveedor>, posicion: number){
  let nombre: string = readlineSync.question("Ingrese el nombre modificado: ");
  let telefono: number = readlineSync.questionInt("Ingrese el nuevo telefono: ");
  let id: number = arregloProveedores[posicion].getId()
  
  let proveedorModificado: Proveedor = new Proveedor(nombre, telefono, id)
  delete arregloProveedores[posicion]
  arregloProveedores[posicion] = proveedorModificado;
  console.log(arregloProveedores)
}

//Funcion para borrar Proveedor 

export function borrarProveedor(proveedor: Array< Proveedor>, id: number){ 
  for (let i= 0; i< proveedor.length; i++){
    if (id === proveedor[i].getId()){
            proveedor.splice(i,1)
    }
}
console.log(proveedor)
}

// crearProveedor(arregloProveedores)
// crearProveedor(arregloProveedores)
// crearProveedor(arregloProveedores)
// crearProveedor(arregloProveedores)
// crearProveedor(arregloProveedores)
// console.log(arregloProveedores)
// borrarProveedor(arregloProveedores, 2)
// console.log(arregloProveedores)
