/* Manejo del DOM */

//Costante que encierra el array de los pokemones

const data = window.POKEMON.pokemon;

//Card que muestra todos los pokémones en la pantalla inicial
for (let i=0; i< data.length; i++){
document.getElementById("viewPokemon").innerHTML+=
`
<div class="col-12 col-sm-6 col-md-4 col-lg-3">    
    <div class="card bg-light mb-3" style="max-width: 18rem;" id= "cardPoke" align= "middle">
    <img src= "${(data[i].img)}" class= "card-img-top" alt= "Card image pokémon" style="max-width: 9rem;">
    <div class="card-body" style="max-width: 9rem;" >
    <p class="card-name">${(data[i].name)}</p>
    <p class="card-num"> Number: ${(data[i].id)}</p>
    <p class="card-type"> Type: ${(data[i].type)}</p>
    </div>
    </div>
</div>
`
}
// Muestra los pokemones filtrados por tipo
document.getElementById("filterType").addEventListener("change", ()=> {

document.getElementById("viewPokemon").innerHTML="";
//document.getElementById("cardPoke").reset();

let condition = document.getElementById("filterType").value;

let dataType = window.filterData(data,condition);

for (let i=0; i< dataType.length; i++){
document.getElementById("viewPokemon").innerHTML+=
`
<div class="col-12 col-sm-6 col-md-4 col-lg-3">    
      <div class="card bg-light mb-3" style="max-width: 18rem;" id= "cardType" align= "middle">
      <img src= "${(dataType[i].img)}" class= "card-img-top" alt= "Card image pokémon type" style="max-width: 9rem;">
      <div class="card-body" style="max-width: 9rem;" >
      <p class="card-name">${(dataType[i].name)}</p>
      <p class="card-num"> Number: ${(dataType[i].id)}</p>
      <p class="card-type"> Type: ${(dataType[i].type)}</p>
      </div>
      </div>
</div>
`
} 
});

// Muestra los pokemones ordenados por número
document.getElementById("filterOrder").addEventListener("change",() =>{

let conditionOrder = document.getElementById("filterOrder").value;
    
    if(conditionOrder === "decreasing"){
    
    document.getElementById("viewPokemon").innerHTML="";    
    let dataOrder = window.orderData(data, conditionOrder);
    
//Card que muestra todos los pokémones por orden decreciente
for (let i=0; i< dataOrder.length; i++){
    document.getElementById("viewPokemon").innerHTML+=
    `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">    
        <div class="card bg-light mb-3" style="max-width: 18rem;" id= "cardPoke" align= "middle">
        <img src= "${(dataOrder[i].img)}" class= "card-img-top" alt= "Card image pokémon" style="max-width: 9rem;">
        <div class="card-body" style="max-width: 9rem;" >
        <p class="card-name">${(dataOrder[i].name)}</p>
        <p class="card-num"> Number: ${(dataOrder[i].id)}</p>
        <p class="card-type"> Type: ${(dataOrder[i].type)}</p>
        </div>
        </div>
    </div>
    `
    }
    }

 else if(conditionOrder === "growing"){
    
    document.getElementById("viewPokemon").innerHTML="";    
    let dataOrderTwo = window.orderDataTwo(data, conditionOrder);
 
//Card que muestra todos los pokémones por orden creciente
for (let i=0; i< dataOrderTwo.length; i++){
    document.getElementById("viewPokemon").innerHTML+=
    `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">    
        <div class="card bg-light mb-3" style="max-width: 18rem;" id= "cardPoke" align= "middle">
        <img src= "${(dataOrderTwo[i].img)}" class= "card-img-top" alt= "Card image pokémon" style="max-width: 9rem;">
        <div class="card-body" style="max-width: 9rem;" >
        <p class="card-name">${(dataOrderTwo[i].name)}</p>
        <p class="card-num"> Number: ${(dataOrderTwo[i].id)}</p>
        <p class="card-type"> Type: ${(dataOrderTwo[i].type)}</p>
        </div>
        </div>
    </div>
    `
    }
    }
        
});