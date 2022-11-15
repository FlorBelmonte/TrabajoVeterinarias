"use strict";
exports.__esModule = true;
var Proveedor = /** @class */ (function () {
    function Proveedor(nombre, telefono, id) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;
    }
    Proveedor.prototype.setId = function (nuevoId) {
        this.id = nuevoId;
    };
    Proveedor.prototype.getId = function () {
        return this.id;
    };
    return Proveedor;
}());
exports["default"] = Proveedor;
