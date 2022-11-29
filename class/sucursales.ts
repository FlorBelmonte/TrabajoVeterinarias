import Veterinaria from './veterinaria';
import Proveedor from './proveedores';

export default class Sucursales{
    private veterinarias: Array< Veterinaria>;
    private proveedores: Array< Proveedor>;

    public constructor(veterinarias: Array< Veterinaria>, proveedores: Array< Proveedor>){
        this.veterinarias = veterinarias;
        this.proveedores = proveedores;
    }

    public getVeterinarias() : Array<Veterinaria> {
        return this.veterinarias;
    }
    
    public setVeterinarias(arreglo: Array< Veterinaria>) : void {
        this.veterinarias = arreglo;
    }
    
    public getProveedores() : Array<Proveedor >{
        return this.proveedores;
    }
    
    public setProveedores(arreglo: Array< Proveedor >) {
        this.proveedores = arreglo;
    }
}