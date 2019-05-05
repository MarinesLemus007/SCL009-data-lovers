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

    describe("window.filterOrder", () => {
  
      it("debería ser una función", () => {
        assert.equal(typeof window.filterOrder, "function");
      });
    })

    describe("window.filterOrder", () => {
      const Data = [
        { "id": 1,
          "name":"Balbasaur",
          "type":"Gross, Poison"
        },
        { "id": 4,
          "name":"Charmander",
          "type":"Fire"
        },
        { "id": 7,
          "name":"Squirtle",
          "type":"Water"
        },
        ]
      
        it("deberia retornar los objetos ordenados de manera decreciente según su id", () => {
          assert.deepEqual(window.filterOrder(Data, "id", "decreasing"), [{"id": 7, "name":"Squirtle", "type":"Water"}, { "id": 4,
          "name":"Charmander", "type":"Fire"}, { "id": 1, "name":"Balbasaur", "type":"Gross, Poison"},])
          });
        })

        describe("window.filterOrder", () => {
          const Data = [
            { 
              "id": 7,
              "name":"Squirtle",
              "type":"Water"
            },
            { "id": 4,
              "name":"Charmander",
              "type":"Fire"
            },
            { "id": 1,
              "name":"Balbasaur",
              "type":"Gross, Poison"
            },
            ]
          
            it("deberia retornar los objetos ordenados de manera creciente según su id", () => {
              assert.deepEqual(window.filterOrder(Data, "id", "growing"), [{"id": 1, "name":"Balbasaur", "type":"Gross, Poison"}, { "id": 4,
              "name":"Charmander", "type":"Fire"}, {"id": 7, "name":"Squirtle", "type":"Water"},])
              });
            })