import Paciente from "./paciente";
import Cliente from "./cliente";
import Proveedor from './proveedores';


export default class Veterinaria {
    private nombre: string;
    private direccion: string;
    private id: number; //Agregue id
    private listaClientes: Array<Cliente>;
    private listaPacientes: Array<Paciente>;

    public constructor (nombre: string, direccion: string, id: number, listaClientes: Array<Cliente>, listaPacientes: Array<Paciente>){
        this.nombre= nombre;
        this.direccion = direccion;
        this.id = id;
        this.listaClientes = listaClientes;
        listaPacientes = listaPacientes;
    }

    public getListaClientes() {
        return this.listaClientes;
    }
    public getListaPacientes() {
        return this.listaPacientes;
    }
    public getId(): number{
        return this.id
    }
    public setId(nuevoId:number):void {
        this.id = nuevoId;
    }
    
    public setListaClientes(arreglo: Array<Cliente>){
        this.listaClientes = arreglo;
    }
    public setListaPacientes(arreglo: Array<Paciente>){
        this.listaPacientes = arreglo;
    }
}
