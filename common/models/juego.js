'use strict';

module.exports = function(Juego) {
/**
 * Devuelve nombre de un juego
 * @param {Function(Error, string)} callback
 */

Juego.prototype.getNombre = function(callback) {
  var juego=this;
  // TODO
  callback(null, juego.nombre);
};

};
