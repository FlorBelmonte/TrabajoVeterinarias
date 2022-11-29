import Veterinaria from './veterinaria';
import Proveedor from './proveedores';

export default class Sucursales{
    private veterinarias: Veterinaria;
    private proveedores: Proveedor;

    public constructor(veterinarias: Veterinaria, proveedores: Proveedor){
        this.veterinarias = veterinarias;
        this.proveedores = proveedores;
    }

    public getVeterinarias() : Veterinaria {
        return this.veterinarias;
    }
    
    public setVeterinarias(arreglo: Array <Veterinaria> ) : void {
        this.veterinarias = nuevoNombre;
    }
    
    public getProveedores() : Proveedor {
        return this.proveedores;
    }
    
    public setProveedores(nuevoNombre: Proveedor ) : void {
        this.proveedores = nuevoNombre;
    }
}