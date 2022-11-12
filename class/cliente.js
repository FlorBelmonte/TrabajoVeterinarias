"use strict";
exports.__esModule = true;
var Cliente = /** @class */ (function () {
    function Cliente(nombre, telefono, id, numVisitas, paciente) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;
        this.numVisitas = numVisitas;
        // this.paciente = paciente;
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
    Cliente.prototype.getId = function () {
        return this.id;
    };
    Cliente.prototype.getPaciente = function () {
        return this.paciente;
    };
    Cliente.prototype.setPaciente = function (nuevoNombre) {
        this.paciente = nuevoNombre;
    };
    return Cliente;
}());
exports["default"] = Cliente;
