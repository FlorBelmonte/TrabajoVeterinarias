"use strict";
exports.__esModule = true;
var Proveedor = /** @class */ (function () {
    function Proveedor(nombre, telefono, idProveedor) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.idProveedor = idProveedor;
    }
    Proveedor.prototype.setIDProveedor = function (nuevoID) {
        this.idProveedor = nuevoID;
    };
    return Proveedor;
}());
exports["default"] = Proveedor;
