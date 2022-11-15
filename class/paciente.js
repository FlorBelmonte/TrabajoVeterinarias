"use strict";
exports.__esModule = true;
var Paciente = /** @class */ (function () {
    function Paciente(nombre, especie, id) {
        this.nombre = nombre;
        this.especie = especie;
        this.id = id;
    }
    Paciente.prototype.getNombre = function () {
        return this.nombre;
    };
    Paciente.prototype.esExotica = function () {
        if (this.especie != "perro" && this.especie != "gato") {
            console.log("el paciente es especie exotica");
        }
    };
    return Paciente;
}());
exports["default"] = Paciente;
//Cree instacias para ver si se ejecutaba bien el método esExotica()
var pacientePrueba1 = new Paciente("Juancito", "gato", 34455);
var pacientePrueba2 = new Paciente("Pepito", "loro", 2425);
pacientePrueba1.esExotica();
pacientePrueba2.esExotica();
