export default class Paciente{
    private nombre: string;
    private especie: string;
    private idDeCliente: number; 

    public constructor(nombre: string, especie: string, idDeCliente: number){
        this.nombre = nombre;
        this.especie = especie;
        this.idDeCliente = idDeCliente;
    }

    public getNombre():string{
        return this.nombre
    }
    public getIdDelCliente():number{
        return this.idDeCliente
    }

    public esExotica():boolean{
        let ok:boolean = false;
        if (this.especie != "perro" && this.especie != "gato"){
            ok = true;
            console.log("el paciente " + this.nombre + " es especie exotica")
        }else {
            console.log("el paciente " + this.nombre + " no es especie exotica")
        }
        return ok
    }
}
