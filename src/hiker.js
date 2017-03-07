"use strict";

// TODO: Put in DB
var planets = {
  'earth': 'Mostly harmless',
  'betelgeuse v': 'A small and delightful planet in the vicinity of Betelgeuse.',
  'mars': 'The chances? A 1,000,000:1 they said.',
};

function lookup(planet) {
  if (! planets[planet] ) {
    return 'That Sir, is NOT a planet!'
  }
  return planets[planet];
}

module.exports = {
  lookup
};
