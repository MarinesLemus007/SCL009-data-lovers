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

/*const OrderNum = (data,decreasing) =>{
  const PokeOrder = data.sort((a,b)=>b-a){
    return ()
  }
  ;
}*/