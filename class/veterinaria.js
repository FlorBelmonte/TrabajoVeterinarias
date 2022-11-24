"use strict";
exports.__esModule = true;
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, direccion, id, listaClientes, listaPacientes) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.id = id;
        this.listaClientes = listaClientes;
        this.listaPacientes = listaPacientes;
    }
    Veterinaria.prototype.getListaClientes = function () {
        return this.listaClientes;
    };
    Veterinaria.prototype.getListaPacientes = function () {
        return this.listaPacientes;
    };
    Veterinaria.prototype.getId = function () {
        return this.id;
    };
    Veterinaria.prototype.setId = function (nuevoId) {
        this.id = nuevoId;
    };
    Veterinaria.prototype.setListaClientes = function (arreglo) {
        this.listaClientes = arreglo;
    };
    Veterinaria.prototype.setListaPacientes = function (arreglo) {
        this.listaPacientes = arreglo;
    };
    return Veterinaria;
}());
exports["default"] = Veterinaria;
