export default class Paciente{
    private nombre: string;
    private especie: string;
    private idDeCliente: number; //Debe coincidir con el id del cliente

    public constructor(nombre: string, especie: string, idDeCliente: number){
        this.nombre = nombre;
        this.especie = especie;
        this.idDeCliente = idDeCliente;
    }

    public getNombre(){
        return this.nombre
    }

    public esExotica():void{
        if (this.especie != "perro" && this.especie != "gato"){
            console.log("el paciente es especie exotica")
        }
    }
}
