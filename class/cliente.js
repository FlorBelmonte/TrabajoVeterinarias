"use strict";
exports.__esModule = true;
var Cliente = /** @class */ (function () {
    function Cliente(nombre, telefono, id, numVisitas, mascota) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;

        this.cantidadDeVisitas = numVisitas;
        this.listaMascotas = [];

    }
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };

    Cliente.prototype.getNumVisitas = function () {
        return this.cantidadDeVisitas;

    };
    Cliente.prototype.setTelefono = function (nuevoTelefono) {
        this.telefono = nuevoTelefono;
    };
    Cliente.prototype.esClienteVip = function () {
        if (this.cantidadDeVisitas >= 5) {
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
