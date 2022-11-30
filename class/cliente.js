"use strict";
exports.__esModule = true;
var Cliente = /** @class */ (function () {
    function Cliente(nombre, telefono, id) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;
        this.cantidadDeVisitas = 0;
        this.listaMascotas = [];
    }
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Cliente.prototype.getTelefono = function () {
        return this.telefono;
    };
    Cliente.prototype.setTelefono = function (nuevoTelefono) {
        this.telefono = nuevoTelefono;
    };
    Cliente.prototype.getCantidadDeVisitas = function () {
        return this.cantidadDeVisitas;
    };
    Cliente.prototype.setCantidadDeVisitas = function (nuevasVisitas) {
        this.cantidadDeVisitas = nuevasVisitas;
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
