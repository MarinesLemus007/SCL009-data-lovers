/* Manejo del DOM */


const data = window.POKEMON.pokemon;

//console.log(POKEMON.pokemon);

/*const filtro = data.filter( element => {
    //console.log(element.name);
});/*

/*console.log(Object.values(POKEMON)); sirve*/

/*const PokeMon = Object.values(POKEMON);
console.log(POKEMON);

PokeMon.forEach(element => {
    console.log(element);
}); sirve*/

/*let PokeGrass = data.filter(view => {
    return (view.type.includes("Grass"));
});
console.log(PokeGrass);*/

/*const namePoke = data.filter(pokeName =>{
    return pokeName.name;
});
console.log(namePoke);*/
/*for (let i=0; i< data.length; i++){
    console.log(data[i].img);
    console.log(data[i].id);
    console.log(data[i].name);
    console.log(data[i].type);
}; */

//orden creciente
//arr.sort((a,b)=>a-b);

//orden decreciente
//arr.sort((a,b)=>b-a);

for (let i=0; i< data.length; i++){
    document.getElementById("viewPokemon").innerHTML+=
`

          <div class="col-12 col-sm-4 col-md-3">    
                <div class="card bg-light mb-3" style="max-width: 18rem;" id= "cardPoke" align= "middle">
                <img src= "${(data[i].img)}" class= "card-img-top" alt= "${(data[i].name)}" style="max-width: 9rem;">
                <div class="card-body">
                <p class="card-name">${(data[i].name)}</p>
                <p class="card-num"> Number: ${(data[i].id)}</p>
                <p class="card-type"> Type: ${(data[i].type)}</p>
                </div>
                </div>
            </div>
`
}

// Muestra los pokemones filtrados por tipo
/*const filterPokemon =*/ document.getElementById("filterType").addEventListener("change", ()=> {

document.getElementById("typePokemon").innerHTML="";

let condition = document.getElementById("filterType").value;

let dataType = window.filterData(data,condition);

//console.log(dataType);

/*const Order = () => {
    let select = document.getElementById('filterOrder');
    let value = select.value;
    let orderResult;
    if(value == 'Asc'){
      Result = data.orderByNameAsc;
    } else if (value == 'Des'){
      Result = data.orderByNameDes;
    } else {
      Result = data.showPokemon;
    }
    createCards(Result);*/

document.getElementById("viewPokemon").style.display ="none";

for (let i=0; i< dataType.length; i++){
document.getElementById("typePokemon").innerHTML+=

`
<div class="col-12 col-sm-4">    
      <div class="card bg-light mb-3" style="max-width: 18rem;" align= "middle">
      <img src= "${(dataType[i].img)}" class= "card-img-top" alt= "${(dataType[i].name)}" style="max-width: 9rem;">
      <div class="card-body">
      <p class="card-name">${(dataType[i].name)}</p>
      <p class="card-num"> Number: ${(dataType[i].id)}</p>
      <p class="card-type"> Type: ${(dataType[i].type)}</p>
      </div>
      </div>
  </div>
  `
} 

}

  ); 