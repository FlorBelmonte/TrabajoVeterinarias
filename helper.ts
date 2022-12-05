import Cliente from "./class/cliente";
import Paciente from './class/paciente';
import Proveedor from "./class/proveedores";
import Veterinaria from "./class/veterinaria";
import Sucursales from "./class/sucursales";
import * as readlineSync from 'readline-sync';
import {Readline} from 'readline/promises'


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

 //Funcion buscar por id a un cliente
 
 export function buscarPorId(arreglo:Array<Cliente|Proveedor>,id:number){
  let ubicacion:number=-1;
  let ok:boolean=false;
  let i:number=0;
  while((ok==false) && (i< arreglo.length)){
    if(id==arreglo[i].getId()){
      ubicacion=i;
      ok=true;
    }else{
      i=i+1
    }
  }
  return ubicacion
} 

//-------Funcion para cargar clientes desdes el Gestor de archivos-----
 
export function cargarCliente(arrCliente: Array<Cliente>,elemento: string){
    let datos = elemento.split(',');
    let nombre: string = datos[0];
    let telefono: number = Number(datos[1]);
    let id: number = crearNumRandom(1000);
    
    while(existeId(arrCliente,id)==true){
      id=crearNumRandom(1000);
    }
    

    let nuevoCliente: Cliente = new Cliente(nombre, telefono, id);
    
    arrCliente.push(nuevoCliente)
    return arrCliente;
}

//-----------Funcion para crear cliente nuevo--------

export function crearCliente(arrCliente: Array<Cliente>){
  let nombre: string = readlineSync.question("Ingrese nombre y apellido del cliente: ");
  let telefono: number = readlineSync.questionInt("Ingrese el telefono del cliente: ");
    
  let id: number = crearNumRandom(1000);

  while(existeId(arrCliente,id)==true){
    id=crearNumRandom(1000);
  }
    
  let nuevoCliente : Cliente = new Cliente(nombre, telefono, id,  );
  arrCliente.push(nuevoCliente)
  
  return arrCliente
}

//Funcion para borrar un cliente

export function borrarCliente(arrClientes:Array <Cliente>):void{
  let deleteId:number=readlineSync.questionInt("Ingrese el id del cliente a eliminar: ");
  let ubicacion:number=buscarPorId(arrClientes,deleteId);
  if(ubicacion!= -1){
    arrClientes.splice(ubicacion,1);
    console.log("Se elimino cliente correctamente");
  }else{
    console.log("No se encontro id ingresado")
  }

}

//Funciones para modificar datos de cliente
export function modificarNombreCliente(arrCliente:Array<Cliente>){
  
  let idCliente:number=readlineSync.questionInt("Ingrese id del cliente a modificar el nombre: ");
  
  let ubicacionId:number=buscarPorId(arrCliente,idCliente);
  if(ubicacionId!=-1){
    let nuevoNombre:string=readlineSync.question("Ingrese el nuevo nombre: ");
    arrCliente[ubicacionId].setNombre(nuevoNombre)
    console.log("Se modifico exitosamente el nombre:  " + arrCliente[ubicacionId].getNombre())
  }else{
    console.log("No se encontro id ingresado")
  }
}

export function modificarTelefonoCliente(arrCliente: Array<Cliente>){
  let idCliente:number=readlineSync.questionInt("Ingrese Id del cliente a modificar el numero telefonico: ");
  let ubicacionId=buscarPorId(arrCliente,idCliente);
  if(ubicacionId!=-1){
    let nuevoTelefono:number=readlineSync.questionInt("Ingrese nuevo numero telefonico: ");
    arrCliente[ubicacionId].setTelefono(nuevoTelefono);
    console.log("Se modifico exitosamente el numero telefonico: " + arrCliente[ubicacionId].getTelefono());
  }else {
    console.log("No se encontro id ingresado")
  }
}

//---------------------------FUNCION PARA PACIENTE-----------------------

//Funcion para cargar paciente desde el Gestor de Archivos

export function cargarPaciente(arrPacientes:Array <Paciente>, paciente: string , arrCliente: Array <Cliente>){
  let datos: string[] = paciente.split(',');
  let nombre: string = datos[0];
  let especie: string = datos[1];
  let idDeCliente=readlineSync.questionInt("Ingrese id del Cliente, al cual quiere asociar un paciente: ");
  let ubicacionId:number=buscarPorId(arrCliente,idDeCliente);
  
  if(ubicacionId!= -1){
    let nuevoPaciente:Paciente=new Paciente(nombre,especie,idDeCliente);
    arrCliente[ubicacionId].getListaMascotas().push(nuevoPaciente);
    arrPacientes.push(nuevoPaciente);
  }else{
    console.log("No se encontro Id ingresado")
  }

  return arrPacientes
}


//Funcion para crear nuevo paciente
export function crearPaciente(arrCliente:Array <Cliente>, arrPacientes:Array <Paciente>){
  let nombre:string=readlineSync.question("Ingrese el nombre del paciente: ");
  let especie:string=readlineSync.question("Ingrese la especie del Paciente: ");
  let idDeCliente=readlineSync.questionInt("Ingrese id del Cliente: ");

  let ubicacionId:number=buscarPorId(arrCliente,idDeCliente);
  
  if(ubicacionId!= -1){
    let nuevoPaciente:Paciente=new Paciente(nombre,especie,idDeCliente);
    arrPacientes.push(nuevoPaciente);
    arrCliente[ubicacionId].getListaMascotas().push(nuevoPaciente);
  }else{
    console.log("No se encontro Id ingresado")
  }
  return arrPacientes
}

//Funcion eliminar paciente

export function eliminarPaciente(arrCliente:Array <Cliente>,arrPacientes:Array<Paciente>):void {
  let idCliente:number=readlineSync.questionInt("Ingrese Id del Cliente, para eliminar paciente: ");
  let ubicacionId=buscarPorId(arrCliente,idCliente);
 
  
  if(ubicacionId!=-1){
    console.log("Lista de pacientes "+ JSON.stringify(arrCliente[ubicacionId].getListaMascotas()) )
    let deletPaciente=readlineSync.question("Ingrese el nombre del paciente a eliminar: ")
    let eliminar:boolean=false;
    let i:number=0;

    while((eliminar==false) && (i<arrCliente[ubicacionId].getListaMascotas().length)){
      if(deletPaciente == arrCliente[ubicacionId].getListaMascotas()[i].getNombre()){
        eliminar=true;
        arrCliente[ubicacionId].getListaMascotas().splice(i,1)
      }else{
        i=i+1
      }
    }

    let eliminarEnListaGeneral:boolean=false;
    i=0;
    while((eliminarEnListaGeneral==false)&&(i<arrPacientes.length)){
      if((idCliente==arrPacientes[i].getIdDelCliente())&& (deletPaciente==arrPacientes[i].getNombre())){
      eliminarEnListaGeneral=true;
      arrPacientes.splice(i,1);
      }else{
        i=i+1
      }
    }
    
    if(eliminar ==true && eliminarEnListaGeneral==true){
      console.log("Se elimino exitosamente, el paciente ingresado")
    }else{
      console.log("No se encontro el nombre del Paciente ingresado")
    }
    
  }else{
    console.log("El Id del cliente Ingresado no se encontro")
  }
  
  
}

//------------------FUNCIONES PARA PROVEEDORES-----------------

//Funcion para cargar proveedor desde el Gestor de Archivos

export function cargarProveedor(arrProveedor: Array<Proveedor>,elemento: string): Array<Proveedor>{
  let datos = elemento.split(',');
  let nombre: string = datos[0];
  let telefono: number = Number(datos[1]);
  let id: number = crearNumRandom(1000);

  while(existeId(arrProveedor,id)==true){
    id=crearNumRandom(1000);
  }
  let nuevoProveedor: Proveedor = new Proveedor(nombre, telefono, id);
    
  arrProveedor.push(nuevoProveedor)
  return arrProveedor;
}

//Funcion para crear nuevo Proveedor

export function crearProveedor(arrProveedor: Array<Proveedor>){
  let nombre: string = readlineSync.question("Ingrese nombre y apellido del proveedor: ");
  let telefono: number = readlineSync.questionInt("Ingrese el telefono del proveedor: ");
    
  let id: number = crearNumRandom(1000);
  while(existeId(arrProveedor,id)==true){
    id=crearNumRandom(1000);
  }

  let nuevoProveedor: Proveedor = new Proveedor(nombre, telefono, id);
  arrProveedor.push(nuevoProveedor);
  console.log(arrProveedor);
}


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

export function borrarProveedor(proveedor: Array< Proveedor>){ 
  let deleteId:number=readlineSync.questionInt("Ingrese Id a Eliminar: ")
  for (let i= 0; i< proveedor.length; i++){
    if (deleteId === proveedor[i].getId()){
      proveedor.splice(i,1)
      console.log("Se elimino Proveedor con id ingresado")
    }
  }
  console.log(proveedor)
}

// ------------------------------------------Funciones para Veterinarias---------------------------------------------------- 

//Cargar Veterinarias

export function cargarVeterinarias(elemento: string, arrVeterinaria: Array<Veterinaria>, arrClientes: Array<Cliente>, arrPacientes: Array <Paciente>): Array <Veterinaria>{
	let datos = elemento.split(',');
	let nombre : string = datos[0];
	let direccion : string = datos[1];
	let id: number = crearNumRandom(1000);
    
  while(existeId(arrVeterinaria,id)==true){
    id=crearNumRandom(1000);
  }
	let listaClientes: Array<Cliente> = arrClientes;
	let listaGeneralMascotas: Array<Paciente> = arrPacientes;
  let nuevaVeterinaria: Veterinaria = new Veterinaria (nombre, direccion, id, listaClientes, listaGeneralMascotas);
  arrVeterinaria.push(nuevaVeterinaria)
  return arrVeterinaria;
}



//Crear Veterinaria

export function crearVeterinaria(arrVeterinaria: Array<Veterinaria>, arrClientes: Array<Cliente>, arrPacientes: Array <Paciente>){
	let nombre : string = readlineSync.question("Ingrese el nombre de la veterinaria: ");
	let direccion: string = readlineSync.question("ingrese dirección: ")
	let id: number = crearNumRandom(1000);
    
  while(existeId(arrVeterinaria,id)==true){
    id=crearNumRandom(1000);
  }
	
	let listaClientes: Array<Cliente> = arrClientes;
	let listaGeneralMascotas: Array<Paciente> = arrPacientes;

  let nuevaVeterinaria: Veterinaria = new Veterinaria(nombre, direccion, id, listaClientes, listaGeneralMascotas);
  arrVeterinaria.push(nuevaVeterinaria)
	console.log(arrVeterinaria)

}

//Modificar veterinaria

export function modificarVeterinaria(arrVeterinarias: Array<Veterinaria>, posicion: number, arrClientes: Array<Cliente>, arrPacientes: Array<Paciente>){
	let nombre : string = readlineSync.question("Ingrese el nuevo nombre: ");
	let direccion: string = readlineSync.question("ingrese nueva dirección: ");

  let id: number = arrVeterinarias[posicion].getId()    

	let veterinariaModificada : Veterinaria = new Veterinaria (nombre, direccion, id, arrClientes, arrPacientes);
	arrVeterinarias[posicion] = veterinariaModificada;
	console.log(arrVeterinarias)

}


//Funcion Borrar Veterinaria  

export function eliminarVeterinaria(arrVeterinarias: Array<Veterinaria>, id: number):void{

  for (let i= 0; i< arrVeterinarias.length; i++){
    if (id === arrVeterinarias[i].getId()){
      arrVeterinarias.splice(i,1)
    }
  }
  console.log(arrVeterinarias)
}

