"use strict";
exports.__esModule = true;
var Paciente = /** @class */ (function () {
    function Paciente(nombre, especie, idDeCliente) {
        this.nombre = nombre;
        this.especie = especie;
        this.idDeCliente = idDeCliente;
    }
    Paciente.prototype.getNombre = function () {
        return this.nombre;
    };
    Paciente.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Paciente.prototype.getEspecie = function () {
        return this.especie;
    };
    Paciente.prototype.setEspecie = function (nuevoEspecie) {
        this.especie = nuevoEspecie;
    };
    Paciente.prototype.getIdDelCliente = function () {
        return this.idDeCliente;
    };
    Paciente.prototype.esExotica = function () {
        var ok = false;
        if (this.especie != "perro" && this.especie != "gato") {
            ok = true;
            console.log("el paciente " + this.nombre + " es especie exotica");
        }
        else {
            console.log("el paciente " + this.nombre + " no es especie exotica");
        }
        return ok;
    };
    return Paciente;
}());
exports["default"] = Paciente;
