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
//Función de orden por número de pókemon

const filterOrder = (data, valueOrder, conditionOrder) =>{

  let dataOrder;

    if (conditionOrder === "decreasing"){
     dataOrder = data.sort((a,b) =>{
        return (b[valueOrder] - a[valueOrder]);
      });
    }

    else if(conditionOrder === "growing"){
      dataOrder = data.sort((a,b) =>{
        return (a[valueOrder] - b[valueOrder]);
      });
    } 
    
  return dataOrder;
 
}  
window.filterOrder = filterOrder;

//const Pokeorder = data.reverse(viewTwo => {
//return (viewTwo.data)
//});

//return Pokeorder;
//}

//const orderDataTwo = (data) =>{
  //const PokeOrderTwo = data.sort((a,b) => {
    //return (a.id - b.id)
  //});
    //return PokeOrderTwo;
  //}
  //window.orderDataTwo = orderDataTwo;

  /*const filterHour = (data) =>{
    const Pokehour = data.filter(view => {
    return (view.spawn_time);
    }); 
    
    return Pokehour;
    }
    window.filterHour = filterHour;*/