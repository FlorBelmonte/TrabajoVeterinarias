export default class Proveedor {
private nombre: string;
private telefono: number;
private id: number;

public constructor (nombre:string, telefono: number, id:number){
    this.nombre = nombre;
    this.telefono = telefono;
    this.id = id
}
public getNombre(): string{
    return this.nombre
}
public setNombre(nuevoNombre: string): void{
    this.nombre = nuevoNombre
}
public getTelefono(): number{
    return this.telefono
}
public setTelefono(nuevoTelefono: number): void{
    this.telefono = nuevoTelefono
}

public setId(nuevoId:number):void {
        this.id = nuevoId;
}

public getId(): number{
   return this.id
}
}


