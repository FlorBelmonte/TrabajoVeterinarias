"use strict";
exports.__esModule = true;
var Cliente = /** @class */ (function () {
<<<<<<< HEAD
    function Cliente(nombre, telefono, id, cantVisitas, mascota) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;
        this.cantVisitas = cantVisitas;
        this.mascota = mascota;
=======
    function Cliente(nombre, telefono, id, numVisitas) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;
        this.numVisitas = numVisitas;
        this.listaMascotas = [];
>>>>>>> noe
    }
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.getCantVisitas = function () {
        var visitas = 0;
        for (var i = 1; i >= 5; i++) {
            if (visitas = 1) {
                visitas++;
            }
        }
        console.log("El cliente ".concat(this.getNombre, " tiene mas de 5 visitas a la Veterinaria, es cliente Vip"));
        return visitas;
    };
    Cliente.prototype.setTelefono = function (nuevoTelefono) {
        this.telefono = nuevoTelefono;
    };
    Cliente.prototype.esClienteVip = function () {
        if (this.numVisitas >= 5) {
            console.log("El cliente es Vip");
        }
    };
    Cliente.prototype.getId = function () {
        return this.id;
    };
    Cliente.prototype.getListaMascotas = function () {
        return this.listaMascotas;
    };
    return Cliente;
}());
exports["default"] = Cliente;
