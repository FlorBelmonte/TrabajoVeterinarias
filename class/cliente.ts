
import Paciente from './paciente';

export default class Cliente {
    private nombre:string;
    private telefono:number;
    private id:number;
    private cantidadDeVisitas:number;
    private listaMascotas: Array<Paciente>;
    
    public constructor(nombre:string, telefono: number,id:number){
        this.nombre=nombre;
        this.telefono=telefono;
        this.id=id;
        this.cantidadDeVisitas=0
        this.listaMascotas= [];

    }
    
    public getNombre():string{
        return this.nombre
    }
    public setNombre(nuevoNombre:string):void{
        this.nombre=nuevoNombre
    }
    public getTelefono():number{
        return this.telefono
    }
    public setTelefono(nuevoTelefono:number):void{
        this.telefono=nuevoTelefono
    }
    public getCantidadDeVisitas():number{
        return this.cantidadDeVisitas
    }
    public setCantidadDeVisitas(nuevasVisitas:number):void{
        this.cantidadDeVisitas=nuevasVisitas
    }
    public contadorVIP(customer: Cliente){ 
        if (this.cantidadDeVisitas< 5){
            customer.setCantidadDeVisitas (this.cantidadDeVisitas+1)
            console.log(this.cantidadDeVisitas)
            console.log ("El cliente aun no es VIP")
                
        }else {
            console.log ("es cliente VIP")
        }
    }

    public getId(): number{
        return this.id
    }
    public getListaMascotas(){
        return this.listaMascotas
    }
    

}
let cliente1 : Cliente = new Cliente("pedro", 2323233, 4)
cliente1.contadorVIP(cliente1)
cliente1.contadorVIP(cliente1)
cliente1.contadorVIP(cliente1)
cliente1.contadorVIP(cliente1)
cliente1.contadorVIP(cliente1)
cliente1.contadorVIP(cliente1)
console.log(cliente1)



