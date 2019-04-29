/* Manejo del DOM */


let viewPokeObj = POKEMON.pokemon;

console.log(POKEMON.pokemon);

const filtro = viewPokeObj.filter( element => {
    console.log(element.name);
});

/*console.log(Object.values(POKEMON)); sirve*/

/*const PokeMon = Object.values(POKEMON);
console.log(POKEMON);

PokeMon.forEach(element => {
    console.log(element);
}); sirve*/

let PokeGrass = viewPokeObj.filter(view => {
    return (view.type.includes("Grass"));
});
console.log(PokeGrass);

/*const namePoke = viewPokeObj.filter(pokeName =>{
    return pokeName.name;
});
console.log(namePoke);*/
for (let i=0; i< viewPokeObj.length; i++){
    console.log(viewPokeObj[i].img);
    console.log(viewPokeObj[i].id);
    console.log(viewPokeObj[i].name);
    console.log(viewPokeObj[i].type);
};

for (let i=0; i< viewPokeObj.length; i++){
    document.getElementById("viewPokemon").innerHTML+=
`

          <div class="col-sm-3">    
                <div class="card bg-light mb-3" style="max-width: 18rem;" id= "cardPoke" align= "middle">
                <img src= "${(viewPokeObj[i].img)}" class= "card-img-top" alt= "${(viewPokeObj[i].name)}" style="max-width: 9rem;">
                <div class="card-body">
                <p class="card-name">${(viewPokeObj[i].name)}</p>
                <p class="card-num"> Number: ${(viewPokeObj[i].id)}</p>
                <p class="card-type"> Type: ${(viewPokeObj[i].type)}</p>
                </div>
                </div>
            </div>
`
};