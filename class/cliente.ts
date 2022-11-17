
import Paciente from './paciente';

export default class Cliente {
    private nombre:string;
    private telefono:number;
    private id:number;
    private numVisitas:number;
    private mascota: Paciente;
    
    public constructor(nombre:string, telefono: number,id:number,numVisitas:number, mascota: Paciente){

        this.nombre=nombre;
        this.telefono=telefono;
        this.id=id;
        this.numVisitas=numVisitas
        this.mascota= mascota;
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
<<<<<<< HEAD

    public esClienteVip(): void{
        if (this.numVisitas>=5){
            console.log("El cliente es Vip")
        }
    }

}

=======
    public getId(): number{
        return this.id
    }
    public getMascota(){
        return this.mascota
    }
    public setMascota(nuevaMascota: Paciente): void {
        this.mascota = nuevaMascota;
    }
}
>>>>>>> RamaFlor2
