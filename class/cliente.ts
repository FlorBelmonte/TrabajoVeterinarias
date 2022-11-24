
import Paciente from './paciente';

export default class Cliente {
    private nombre:string;
    private telefono:number;
    private id:number;
    private cantidadDeVisitas:number;
    private listaMascotas:Array <Paciente>;
    public constructor(nombre:string, telefono: number,id:number,numVisitas:number){
        this.nombre=nombre;
        this.telefono=telefono;
        this.id=id;
        this.cantidadDeVisitas=numVisitas
        this.listaMascotas=[];
    }
    public getNombre():string{
        return this.nombre
    }
    public getNumVisitas():number{
        return this.cantidadDeVisitas
    }
    public setTelefono(nuevoTelefono:number):void{
        this.telefono=nuevoTelefono
    }
    public esClienteVip(): void{
        if (this.cantidadDeVisitas>=5){
            console.log("El cliente es Vip")
        }
    }
    public getId(): number{
        return this.id
    }
    public getListaMascotas(){
        return this.listaMascotas
    }
    public agregarListaMascota(nuevaMascota: Paciente): void {
       this.listaMascotas.push(nuevaMascota)
    }
}








