"use strict";
exports.__esModule = true;
var Cliente = /** @class */ (function () {
    function Cliente(nombre, telefono, id, numVisitas) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;
        this.numVisitas = numVisitas;
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
    return Cliente;
}());
exports["default"] = Cliente;
