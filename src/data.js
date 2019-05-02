/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/
const filterData = (data, condition) =>{
 const Poketype = data.filter(view => {
  return (view.type.includes(condition));
}); 

return Poketype;
}

window.filterData = filterData;


/*const orderByNameAsc = POKEMON.pokemon.map(poke => poke); //console.log(orderByNameAsc);
orderByNameAsc.sort((original, order) => {
    return original.name.localeCompare(order.name);
}); //console.log(orderByNameAsc);

const orderByNameDes = POKEMON.pokemon.map(poke => poke); //console.log(orderByNameAsc);
orderByNameDes.sort((original, order) => {
    return order.name.localeCompare(original.name);
}); //console.log(orderByNameDes);*/


/*const OrderNum = (data,decreasing) =>{
  const PokeOrder = data.sort((a,b)=>b-a){
    return ()
  }
  ;
}*/