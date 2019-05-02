global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

//it('debería retornar "example"', () => {
   // assert.equal(example(), 'example');
  //});

describe("window.filterData", () => {
  
  it("debería ser una función", () => {
    assert.equal(typeof window.filterData, "function");
  });
})

describe("window.filterData", () => {
  const Data = [
    {
      "name":"Balbasaur",
      "type":"Gross, Poison"
    },
    {
      "name":"Charmander",
      "type":"Fire"
    },
    {
      "name":"Squirtle",
      "type":"Water"
    },
    ]
  
    it("deberia retornar el objeto Balbasaur al filtrar por tipo Gross", () => {
      assert.deepEqual(window.filterData(Data, "Gross"), [{"name":"Balbasaur", "type":"Gross, Poison"}])
      });
    })