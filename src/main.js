/* Manejo del DOM */

//Costante que encierra el array de los pokemones

const data = window.POKEMON.pokemon;

//document.getElementById("tablePokemon").style.display = "none";

//Card que muestra todos los pokémones en la pantalla inicial
for (let i=0; i< data.length; i++){
document.getElementById("viewPokemon").innerHTML+=
`
<div class="col-12 col-sm-6 col-md-4 col-lg-3">    
    <div class="card bg-light mb-3" style="max-width: 18rem;" id= "cardPoke" align= "middle">
    <img src= "${(data[i].img)}" class= "card-img-top" alt= "Card image pokémon" style="max-width: 9rem;">
    <div class="card-body" style="max-width: 9rem;" >
    <p class="card-title">${(data[i].name)}</p>
    <p class="card-title"> Number: ${(data[i].id)}</p>
    <p class="card-title"> Type: ${(data[i].type)}</p>
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

// Muestra los pokemones ordenados de manera decreciente y creciente
document.getElementById("filterOrder").addEventListener("change",() =>{
document.getElementById("viewPokemon").innerHTML=""; 

let conditionOrder = document.getElementById("filterOrder").value;
let dataOrder;

if ("decreasing" === conditionOrder){
  dataOrder = window.filterOrder(data, "id", "decreasing");
  }

else if ("growing" === conditionOrder){
   dataOrder = window.filterOrder(data, "id","growing");
  }

//Card que muestra todos los pokémones ordenados por su id
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
});

/*document.getElementById("departureTime").addEventListener("change", ()=> {
let time = document.getElementById("departureTime").value;
console.log(time);

if(time === "morning"){

  

document.getElementById("viewPokemon").style.display = "none";
//document.getElementById("viewPokemon").innerHTML="";
let dataHour = window.filterHour(data);
console.log(dataHour);

//if(dataHour[i].spawn_time >= "00:00" && dataHour[i].spawn_time < "12:00")

for (let i=0; i<dataHour.length; i++){
    document.getElementById("viewCalcule").innerHTML+=
    `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${(dataHour[i].name)}</h5>
      
    
    <div class="card">  
      <div class="card-body">
        <h5 class="card-title">${(dataHour[i].spawn_time)}</h5>
      </div>
    </div>
    </div>
    </div>
    `
    }
    
}
})
    
    /*document.getElementById("viewPokemon").style.display = "none";
    document.getElementById("tablePokemon").style.display = "block";*/
    
    //if(conditionTime === "morning"){
    
      //  document.getElementById("viewPokemon").innerHTML="";    
       // let dataOrder = window.orderData(data, conditionOrder);
//})