import "core-js/modules/es.promise.js";
import "regenerator-runtime/runtime.js";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import fechAnimales from "./fechAnimales.js";
import clases from "./clases.js";
var btnFormulario = document.getElementById("btnRegistrar");
var nomAnimal = document.getElementById("animal");
var preview = document.getElementById("preview");
var edadAnimal = document.getElementById("edad");
var comentarios = document.getElementById("comentarios");
var animalEstudiado = [];

var _await$fechAnimales$g = await fechAnimales.getData(),
    animales = _await$fechAnimales$g.animales;

nomAnimal.addEventListener("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", imagenAnimal(animales));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));

var imagenAnimal = function imagenAnimal(animal) {
  for (var key in animal) {
    nomAnimal.value == animal[key].name ? preview.style.backgroundImage = "url(../assets/imgs/".concat(animal[key].imagen, ")") : null;
  }
};

btnFormulario.addEventListener("click", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
    var img, imgVal, animal1;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            event.preventDefault();
            img = preview.style.backgroundImage;
            imgVal = img.slice(8, img.length - 2); //instancias de clases

            _context2.t0 = nomAnimal.value;
            _context2.next = _context2.t0 === "Leon" ? 6 : _context2.t0 === "Lobo" ? 8 : _context2.t0 === "Oso" ? 10 : _context2.t0 === "Serpiente" ? 12 : _context2.t0 === "Aguila" ? 14 : 16;
            break;

          case 6:
            animal1 = new clases.Leon(nomAnimal.value, edadAnimal.value, imgVal, comentarios.value, animales[0].sonido);
            return _context2.abrupt("break", 17);

          case 8:
            animal1 = new clases.Lobo(nomAnimal.value, edadAnimal.value, imgVal, comentarios.value, animales[1].sonido);
            return _context2.abrupt("break", 17);

          case 10:
            animal1 = new clases.Oso(nomAnimal.value, edadAnimal.value, imgVal, comentarios.value, animales[2].sonido);
            return _context2.abrupt("break", 17);

          case 12:
            animal1 = new clases.Serpiente(nomAnimal.value, edadAnimal.value, imgVal, comentarios.value, animales[3].sonido);
            return _context2.abrupt("break", 17);

          case 14:
            animal1 = new clases.Aguila(nomAnimal.value, edadAnimal.value, imgVal, comentarios.value, animales[4].sonido);
            return _context2.abrupt("break", 17);

          case 16:
            return _context2.abrupt("break", 17);

          case 17:
            //Validacion, push al arreglo y limpieza formulario
            if (nomAnimal.value && edadAnimal.value && comentarios.value && preview.style.backgroundImage) {
              animalEstudiado.push(animal1);
              nomAnimal.selectedIndex = 0;
              edadAnimal.selectedIndex = 0;
              preview.style.backgroundImage = "url(../assets/imgs/lion.svg)";
              comentarios.value = "";
            } else {
              alert("Por favor complete la informacion necesaria");
            }

            console.log(animalEstudiado);
            return _context2.abrupt("return", tabular());

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}()); //Ejecucion Moddal

window.ejecutarModal = function (indexAnimal) {
  var animal = animalEstudiado[indexAnimal];
  var contenidoModal = document.querySelector(".modal-body");
  contenidoModal.innerHTML = "";
  contenidoModal.innerHTML = "\n    <div>\n      <div>\n        <img class=\"text-white imagen-modal\" src=\"".concat(animal.getImg(), "\" alt=\"").concat(animal.getNombre(), "\">\n      </div>\n      <p class=\"fw-bold text-white\">").concat(animal.getEdad(), "</p>\n      <p class=\"fw-bold text-white\">Comentarios</p>  \n      <p class=\"text-white\">").concat(animal.getComentarios(), "</p>\n    </div>");
}; //Tabulacion de animales seleccionados


var tabular = function tabular() {
  var tabla = document.getElementById("Animales");
  tabla.innerHTML = "";
  animalEstudiado.forEach(function (animal, indexAnimal) {
    tabla.innerHTML += "\n    <div class=\"participante px-3 pb-2\" style=\"width: 30rem;\">\n      <div class=\"card\">\n        <div><img src=\"".concat(animal.getImg(), "\" class=\"card-img-top modalClick\" onClick=\"ejecutarModal(").concat(indexAnimal, ")\" data-toggle=\"modal\" data-target=\"#exampleModal\"/></div>\n        <div class=\"card-body bg bg-secondary py-1\" onclick=\"document.getElementById('player-").concat(indexAnimal, "').play()\">\n          <img src=\"assets/imgs/audio.svg\" style=\"width: 1.5rem;\"/>\n           <audio id=\"player-").concat(indexAnimal, "\" src=\"assets/sounds/").concat(animal.getSonido(), "\"></audio>\n        </div>   \n      </div>\n    </div>");
  });
};