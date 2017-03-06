"use strict";
var expect    = require("chai").expect;
var book      = require("../src/hiker.js");
describe("Hitch Hikers Guide To The Galaxy", function() {
  it("Should describe Earth", ()=>{
    expect(book.lookup("earth")).to.equal("Mostly harmless");
  });

  it("Should describe Betelgeuse V", ()=>{
    expect(book.lookup("betelgeuse v")).to.equal(
      "A small and delightful planet in the vicinity of Betelgeuse."); 	
  });

});
