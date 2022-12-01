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
    Paciente.prototype.getIdDelCliente = function () {
        return this.idDeCliente;
    };
    Paciente.prototype.esExotica = function () {
        if (this.especie != "perro" && this.especie != "gato") {
            console.log("el paciente es especie exotica");
        }
    };
    return Paciente;
}());
exports["default"] = Paciente;
