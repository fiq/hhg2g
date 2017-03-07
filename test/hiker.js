"use strict";

var expect    = require("chai").expect;
var book      = require("../src/hiker.js");
describe("Hitch Hikers Guide To The Galaxy", function() {
  it("Should describe Earth", ()=>{
    expect(book.lookup("earth")).to.equal("Mostly harmless");
  });

  it("Should describe Betelgeuse V", ()=>{
    expect(book.lookup("betelgeuse v")).to.equal("A small and delightful planet in the vicinity of Betelgeuse.");
  });

  it("Should describe Mars", ()=>{
    expect(book.lookup("mars")).to.equal("The chances? A 1,000,000:1 they said.");
  });

  it("Should handle a lookup for a non-planet", () => {
    expect( book.lookup("pluto") ).to.equal("That Sir, is NOT a planet!");
  });

});
