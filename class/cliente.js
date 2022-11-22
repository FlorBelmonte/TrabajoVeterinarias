"use strict";
exports.__esModule = true;
var Cliente = /** @class */ (function () {
    function Cliente(nombre, telefono, id, numVisitas, mascota) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;
        this.numVisitas = numVisitas;
        this.mascota = mascota;
    }
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.getNumVisitas = function () {
        return this.numVisitas;
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
