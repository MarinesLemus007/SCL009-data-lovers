/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/

//Función de filtrado por tipo de pokémon
const filterData = (data, condition) =>{
const Poketype = data.filter(view => {
return (view.type.includes(condition));
}); 

return Poketype;
}
window.filterData = filterData;

const orderData = (data) =>{
  const Pokeorder = data.reverse(viewTwo => {
    return (viewTwo.data)
  });
  
  return Pokeorder;
  }
  window.orderData = orderData;

const orderDataTwo = (data) =>{
  const PokeOrderTwo = data.sort((a,b) => {
    return (a.id - b.id)
  });
    return PokeOrderTwo;
  }
  window.orderDataTwo = orderDataTwo;