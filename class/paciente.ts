export default class Paciente{
    private nombre: string;
    private especie: string;
    private id: number; //Debe coincidir con el id del cliente

    public constructor(nombre: string, especie: string, id: number){
        this.nombre = nombre;
        this.especie = especie;
        this.id = id;
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
//Cree instacias para ver si se ejecutaba bien el método esExotica()
let pacientePrueba1: Paciente = new Paciente("Juancito", "gato", 34455)
let pacientePrueba2: Paciente = new Paciente ("Pepito", "loro", 2425)
pacientePrueba1.esExotica()
pacientePrueba2.esExotica()
