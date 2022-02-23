import "core-js/modules/es.symbol.description.js";
import "core-js/modules/web.dom-collections.iterator.js";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Animal = /*#__PURE__*/function () {
  function Animal(nombre, edad, img, comentarios, sonido) {
    _classCallCheck(this, Animal);

    var _nombre = nombre;
    var _edad = edad;
    var _img = img;
    var _comentarios = comentarios;
    var _sonido = sonido;

    this.getNombre = function () {
      return _nombre;
    };

    this.getEdad = function () {
      return _edad;
    };

    this.getImg = function () {
      return _img;
    };

    this.getComentarios = function () {
      return _comentarios;
    };

    this.setComentarios = function (comentarios) {
      return _comentarios = comentarios;
    };

    this.getSonido = function () {
      return _sonido;
    };
  }

  _createClass(Animal, [{
    key: "nombreGet",
    get: function get() {
      return this.getNombre();
    }
  }, {
    key: "edadGet",
    get: function get() {
      return this.getEdad();
    }
  }, {
    key: "imgGet",
    get: function get() {
      return this.getImg();
    }
  }, {
    key: "comentariosGet",
    get: function get() {
      return this.getComentarios();
    }
  }, {
    key: "comentariosSet",
    set: function set(comentarios) {
      this.setComentarios(comentarios);
    }
  }, {
    key: "sonidoGet",
    get: function get() {
      return this.getSonido();
    }
  }]);

  return Animal;
}();

var Leon = /*#__PURE__*/function (_Animal) {
  _inherits(Leon, _Animal);

  var _super = _createSuper(Leon);

  function Leon(nombre, edad, img, comentarios, sonido) {
    _classCallCheck(this, Leon);

    return _super.call(this, nombre, edad, img, comentarios, sonido);
  }

  _createClass(Leon, [{
    key: "rugir",
    value: function rugir() {
      return this.getSonido();
    }
  }]);

  return Leon;
}(Animal);

;

var Lobo = /*#__PURE__*/function (_Animal2) {
  _inherits(Lobo, _Animal2);

  var _super2 = _createSuper(Lobo);

  function Lobo(nombre, edad, img, comentarios, sonido) {
    _classCallCheck(this, Lobo);

    return _super2.call(this, nombre, edad, img, comentarios, sonido);
  }

  _createClass(Lobo, [{
    key: "aullar",
    value: function aullar() {
      return this.getSonido();
    }
  }]);

  return Lobo;
}(Animal);

;

var Oso = /*#__PURE__*/function (_Animal3) {
  _inherits(Oso, _Animal3);

  var _super3 = _createSuper(Oso);

  function Oso(nombre, edad, img, comentarios, sonido) {
    _classCallCheck(this, Oso);

    return _super3.call(this, nombre, edad, img, comentarios, sonido);
  }

  _createClass(Oso, [{
    key: "gru\xF1ir",
    value: function gruñir() {
      return this.getSonido();
    }
  }]);

  return Oso;
}(Animal);

;

var Serpiente = /*#__PURE__*/function (_Animal4) {
  _inherits(Serpiente, _Animal4);

  var _super4 = _createSuper(Serpiente);

  function Serpiente(nombre, edad, img, comentarios, sonido) {
    _classCallCheck(this, Serpiente);

    return _super4.call(this, nombre, edad, img, comentarios, sonido);
  }

  _createClass(Serpiente, [{
    key: "sisear",
    value: function sisear() {
      return this.getSonido();
    }
  }]);

  return Serpiente;
}(Animal);

;

var Aguila = /*#__PURE__*/function (_Animal5) {
  _inherits(Aguila, _Animal5);

  var _super5 = _createSuper(Aguila);

  function Aguila(nombre, edad, img, comentarios, sonido) {
    _classCallCheck(this, Aguila);

    return _super5.call(this, nombre, edad, img, comentarios, sonido);
  }

  _createClass(Aguila, [{
    key: "chillar",
    value: function chillar() {
      return this.getSonido();
    }
  }]);

  return Aguila;
}(Animal);

;
export default {
  Leon: Leon,
  Lobo: Lobo,
  Oso: Oso,
  Serpiente: Serpiente,
  Aguila: Aguila
};