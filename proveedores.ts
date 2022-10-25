export default class Proveedor {
private nombre: string;
private telefono: number;
private idProveedor: number;

public constructor (nombre:string, telefono: number, idProveedor:number){
    this.nombre = nombre;
    this.telefono = telefono;
    this.idProveedor = idProveedor
}

public setIDProveedor(nuevoID:number):void {
        this.idProveedor = nuevoID;
}
}


