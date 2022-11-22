import Paciente from "./paciente";
import Cliente from "./cliente";
import Proveedor from './proveedores';


export default class Veterinaria {
    private nombre: string;
    private direccion: string;
    private listaClientes: Array<Cliente>;
    private listaPacientes: Array<Paciente>;

    public constructor (nombre: string, direccion: string, listaClientes: Array<Cliente>, listaPacientes: Array<Paciente>){
        this.nombre= nombre;
        this.direccion = direccion;
        this.listaClientes = listaClientes;
        listaPacientes = listaPacientes;
    }

    public getListaClientes() {
        return this.listaClientes;
    }
    public getListaPacientes() {
        return this.listaPacientes;
    }


    public setListaClientes(arreglo: Array<Cliente>){
        this.listaClientes = arreglo;
    }
    public setListaPacientes(arreglo: Array<Paciente>){
        this.listaPacientes = arreglo;
    }
}
