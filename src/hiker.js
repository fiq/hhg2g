"use strict";

var planets = {
  'earth': 'Mostly harmless',
  'betelgeuse v': 'A small and delightful planet in the vicinity of Betelgeuse.',
};

function lookup(place) {
  // FIXME - handle failed lookup
  return planets[place];
}

module.exports = {
  lookup
};
