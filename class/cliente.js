"use strict";
exports.__esModule = true;
var Cliente = /** @class */ (function () {
    function Cliente(nombre, telefono, id, numVisitas) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;
        this.numVisitas = numVisitas;
        this.listaMascotas = [];
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
