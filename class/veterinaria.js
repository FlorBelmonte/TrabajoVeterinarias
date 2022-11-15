"use strict";
exports.__esModule = true;
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, direccion, listaClientes, listaPacientes) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.listaClientes = listaClientes;
        listaPacientes = listaPacientes;
    }
    Veterinaria.prototype.getListaClientes = function () {
        return this.listaClientes;
    };
    Veterinaria.prototype.getListaPacientes = function () {
        return this.listaPacientes;
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
