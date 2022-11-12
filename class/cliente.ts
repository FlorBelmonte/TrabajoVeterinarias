import Paciente from './paciente';

export default class Cliente {
    private nombre:string;
    private telefono:number;
    private id:number;
    private numVisitas:number;
    // private paciente: Paciente;
    public constructor(nombre:string, telefono: number,id:number,numVisitas:number){
        this.nombre=nombre;
        this.telefono=telefono;
        this.id=id;
        this.numVisitas=numVisitas
        // this.paciente = paciente;
    }

    public getNombre():string{
        return this.nombre
    }

    public getNumVisitas():number{
        return this.numVisitas
    }
    public setTelefono(nuevoTelefono:number):void{
        this.telefono=nuevoTelefono
    }
    public getId(): number{
        return this.id
    }
    // public getPaciente() : Paciente {
    //     return this.paciente;
    // }
    
    // public setPaciente(nuevoNombre: Paciente ) : void {
    //     this.paciente = nuevoNombre;
    // }
}