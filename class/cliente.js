"use strict";
exports.__esModule = true;
var Cliente = /** @class */ (function () {
    function Cliente(nombre, telefono, id, cantVisitas, mascota) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;
        this.cantVisitas = cantVisitas;
        this.mascota = mascota;
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
    Cliente.prototype.getId = function () {
        return this.id;
    };
    Cliente.prototype.getMascota = function () {
        return this.mascota;
    };
    Cliente.prototype.setMascota = function (nuevaMascota) {
        this.mascota = nuevaMascota;
    };
    return Cliente;
}());
exports["default"] = Cliente;
