/* Manejo del DOM */

//Costante que encierra el array de los pokemones

//const data = window.POKEMON.pokemon;

//Agregando el fetch


fetch("https://raw.githubusercontent.com/MarinesLemus007/SCL009-data-lovers/master/src/data/pokemon/pokemon.json")
.then(response =>{ return response.json()
})
.then(myJson => {
const data = myJson.pokemon;



//Card que muestra todos los pokémones en la pantalla inicial
for (let i=0; i< data.length; i++){
document.getElementById("viewPokemon").innerHTML+=
`
<div class="col-12 col-sm-6 col-md-4 col-lg-3">    
    <div class="card bg-light mb-3" id= "cardPoke" align= "middle">
    <img src= "${(data[i].img)}" class= "card-img-top" alt= "Card image pokémon" id="cardImage">
    <div class="card-body text-dark" id= "cardPokeTwo">
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

let condition = document.getElementById("filterType").value;
let dataType = window.filterData(data,condition);

for (let i=0; i< dataType.length; i++){
document.getElementById("viewPokemon").innerHTML+=
`
<div class="col-12 col-sm-6 col-md-4 col-lg-3">    
      <div class="card bg-light mb-3" id= "cardPoke" align= "middle">
      <img src= "${(dataType[i].img)}" class= "card-img-top" alt= "Card image pokémon type" id="cardImage">
      <div class="card-body text-dark" id="cardPokeTwo">
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
        <div class="card bg-light mb-3" id= "cardPoke" align= "middle">
        <img src= "${(dataOrder[i].img)}" class= "card-img-top" alt= "Card image pokémon" id="cardImage">
        <div class="card-body text-dark" id="cardPokeTwo" >
        <p class="card-name">${(dataOrder[i].name)}</p>
        <p class="card-num"> Number: ${(dataOrder[i].id)}</p>
        <p class="card-type"> Type: ${(dataOrder[i].type)}</p>
        </div>
        </div>
    </div>
    `
    }
});

document.getElementById("departureTime").addEventListener("change", ()=> {
document.getElementById("viewPokemon").style.display = "none";
document.getElementById("chartPoke").innerHTML="";
document.getElementById("viewCalculeTab").innerHTML="";
document.getElementById("viewCalcule").innerHTML="";

let conditionHour = document.getElementById("departureTime").value;
let countPoke;
let dataPercent;
let dataHour;

if( "morning" === conditionHour){
  dataHour = window.filterHour(data, "spawn_time", "morning");
}

if( "late" === conditionHour){
  dataHour = window.filterHour(data, "spawn_time", "late");
}

if ("night" === conditionHour){
  dataHour = window.filterHour(data, "spawn_time","night");
 }

else if ("N/A" === conditionHour){
  dataHour = window.filterHour(data, "spawn_time","N/A");
 }

countPoke = window.filterCounterHour(dataHour,"spawn_time");
dataPercent = window.filterCal(countPoke);
  
document.getElementById("viewCalculeTab").innerHTML+=
    `
    <div class="card-group col-12 justify-content-center">
      <div class="row">
        <div class="card" id= "cardHour">
          <div class="card-body text-dark" id= "cardHour_2">
          <h5 class="card-title">Cantidad: ${(countPoke)}</h5>
          </div>
        </div>
        <div class="card" id= "cardHourTwo">
          <div class="card-body text-dark" id= "cardHourTwo_2">
          <h5 class="card-title">Porcentaje: ${(dataPercent)}%</h5>
          </div>
        </div>
      </div>
    </div>
      `

for (let i=0; i<dataHour.length; i++){
    document.getElementById("viewCalcule").innerHTML+=
    `
  <div class="card-group col-12 justify-content-center">
    <div class="row">
      <div class="card" id="cardPokeHour">
        <div class="card-body text-dark" id="cardPokeHour_2">
        <h5 class="card-title">${(dataHour[i].name)}</h5>
        </div>
      </div>
      <div class="card" id="cardPokeHourTwo">
        <div class="card-body text-dark" id="cardPokeHourTwo_2">
        <h5 class="card-title">${(dataHour[i].spawn_time)}</h5>
        </div>
      </div>
    </div>
  </div>
    `
    }

  document.getElementById("chartPoke").innerHTML+=
    `<canvas id="myChart"></canvas>`
    
    

    let ctx = document.getElementById("myChart");
     new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Total Pokémon', "Pokémon coming out in the " + conditionHour],
            datasets: [{
                label: 'Porcentaje de pokémones por hora de salida',
                data: [100-dataPercent, dataPercent],
                backgroundColor: [
                    'rgba(100, 170, 103, 1)',
                    'rgba(235, 127, 54, 1)'
                ],
                borderColor: [
                    'rgba(100, 170, 103, 1)',
                    'rgba(235, 127, 54, 1)'
                ],
                borderWidth: 1
            }]
        },
        
    });

    

})

})