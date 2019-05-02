const POKEMON = {
    "pokemon": [{
      "id": 1,
      "num": "001",
      "name": "Bulbasaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
      "type": [
        "Grass",
        "Poison"
      ],
      "height": "0.71 m",
      "weight": "6.9 kg",
      "candy": "Bulbasaur Candy",
      "candy_count": 25,
      "egg": "2 km",
      "spawn_chance": 0.69,
      "avg_spawns": 69,
      "spawn_time": "20:00",
      "multipliers": [1.58],
      "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ],
      "next_evolution": [{
        "num": "002",
        "name": "Ivysaur"
      }, {
        "num": "003",
        "name": "Venusaur"
      }]
    }, {
        "id": 3,
        "num": "003",
        "name": "Venusaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "height": "2.01 m",
        "weight": "100.0 kg",
        "candy": "Bulbasaur Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.017,
        "avg_spawns": 1.7,
        "spawn_time": "11:30",
        "multipliers": null,
        "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ],
        "prev_evolution": [{
          "num": "001",
          "name": "Bulbasaur"
        }, {
          "num": "002",
          "name": "Ivysaur"
        }]
      }, {
        "id": 4,
        "num": "004",
        "name": "Charmander",
        "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
        "type": [
          "Fire"
        ],
        "height": "0.61 m",
        "weight": "8.5 kg",
        "candy": "Charmander Candy",
        "candy_count": 25,
        "egg": "2 km",
        "spawn_chance": 0.253,
        "avg_spawns": 25.3,
        "spawn_time": "08:45",
        "multipliers": [1.65],
        "weaknesses": [
          "Water",
          "Ground",
          "Rock"
        ],
        "next_evolution": [{
          "num": "005",
          "name": "Charmeleon"
        }, {
          "num": "006",
          "name": "Charizard"
        }]
      }, {
        "id": 5,
        "num": "005",
        "name": "Charmeleon",
        "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
        "type": [
          "Fire"
        ],
        "height": "1.09 m",
        "weight": "19.0 kg",
        "candy": "Charmander Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.012,
        "avg_spawns": 1.2,
        "spawn_time": "19:00",
        "multipliers": [1.79],
        "weaknesses": [
          "Water",
          "Ground",
          "Rock"
        ],
        "prev_evolution": [{
          "num": "004",
          "name": "Charmander"
        }],
        "next_evolution": [{
          "num": "006",
          "name": "Charizard"
        }]
      }, 
      {
        "id": 7,
        "num": "007",
        "name": "Squirtle",
        "img": "http://www.serebii.net/pokemongo/pokemon/007.png",
        "type": [
          "Water"
        ],
        "height": "0.51 m",
        "weight": "9.0 kg",
        "candy": "Squirtle Candy",
        "candy_count": 25,
        "egg": "2 km",
        "spawn_chance": 0.58,
        "avg_spawns": 58,
        "spawn_time": "04:25",
        "multipliers": [2.1],
        "weaknesses": [
          "Electric",
          "Grass"
        ],
        "next_evolution": [{
          "num": "008",
          "name": "Wartortle"
        }, {
          "num": "009",
          "name": "Blastoise"
        }]
      }, {
        "id": 8,
        "num": "008",
        "name": "Wartortle",
        "img": "http://www.serebii.net/pokemongo/pokemon/008.png",
        "type": [
          "Water"
        ],
        "height": "0.99 m",
        "weight": "22.5 kg",
        "candy": "Squirtle Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.034,
        "avg_spawns": 3.4,
        "spawn_time": "07:02",
        "multipliers": [1.4],
        "weaknesses": [
          "Electric",
          "Grass"
        ],
        "prev_evolution": [{
          "num": "007",
          "name": "Squirtle"
        }],
        "next_evolution": [{
          "num": "009",
          "name": "Blastoise"
        }]
      },  {
        "id": 10,
        "num": "010",
        "name": "Caterpie",
        "img": "http://www.serebii.net/pokemongo/pokemon/010.png",
        "type": [
          "Bug"
        ],
        "height": "0.30 m",
        "weight": "2.9 kg",
        "candy": "Caterpie Candy",
        "candy_count": 12,
        "egg": "2 km",
        "spawn_chance": 3.032,
        "avg_spawns": 303.2,
        "spawn_time": "16:35",
        "multipliers": [1.05],
        "weaknesses": [
          "Fire",
          "Flying",
          "Rock"
        ],
        "next_evolution": [{
          "num": "011",
          "name": "Metapod"
        }, {
          "num": "012",
          "name": "Butterfree"
        }]
      }, {
        "id": 11,
        "num": "011",
        "name": "Metapod",
        "img": "http://www.serebii.net/pokemongo/pokemon/011.png",
        "type": [
          "Bug"
        ],
        "height": "0.71 m",
    "weight": "9.9 kg",
    "candy": "Caterpie Candy",
    "candy_count": 50,
    "egg": "Not in Eggs",
    "spawn_chance": 0.187,
    "avg_spawns": 18.7,
    "spawn_time": "02:11",
    "multipliers": [
      3.55,
      3.79
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "010",
      "name": "Caterpie"
    }],
    "next_evolution": [{
      "num": "012",
      "name": "Butterfree"
    }]
  },
  {
    "id": 16,
    "num": "016",
    "name": "Pidgey",
    "img": "http://www.serebii.net/pokemongo/pokemon/016.png",
    "type": [
      "Normal",
      "Flying"
    ],
    "height": "0.30 m",
    "weight": "1.8 kg",
    "candy": "Pidgey Candy",
    "candy_count": 12,
    "egg": "2 km",
    "spawn_chance": 15.98,
    "avg_spawns": 1.598,
    "spawn_time": "01:34",
    "multipliers": [
      1.71,
      1.92
    ],
    "weaknesses": [
      "Electric",
      "Rock"
    ],
    "next_evolution": [{
      "num": "017",
      "name": "Pidgeotto"
    }, {
      "num": "018",
      "name": "Pidgeot"
    }]
  }, {
    "id": 17,
    "num": "017",
    "name": "Pidgeotto",
    "img": "http://www.serebii.net/pokemongo/pokemon/017.png",
    "type": [
      "Normal",
      "Flying"
    ],
    "height": "1.09 m",
    "weight": "30.0 kg",
    "candy": "Pidgey Candy",
    "candy_count": 50,
    "egg": "Not in Eggs",
    "spawn_chance": 1.02,
    "avg_spawns": 102,
    "spawn_time": "01:30",
    "multipliers": [1.79],
    "weaknesses": [
      "Electric",
      "Rock"
    ],
    "prev_evolution": [{
      "num": "016",
      "name": "Pidgey"
    }],
    "next_evolution": [{
      "num": "018",
      "name": "Pidgeot"
    }]
  },
  "id" : 23,
  "num": "023",
  "name": "Ekans",
  "img": "http://www.serebii.net/pokemongo/pokemon/023.png",
  "type": [
    "Poison"
  ],
  "height": "2.01 m",
  "weight": "6.9 kg",
  "candy": "Ekans Candy",
  "candy_count": 50,
  "egg": "5 km",
  "spawn_chance": 2.27,
  "avg_spawns": 227,
  "spawn_time": "12:20",
  "multipliers": [
    2.21,
    2.27
  ],
  "weaknesses": [
    "Ground",
    "Psychic"
  ],
  "next_evolution": [{
    "num": "024",
    "name": "Arbok"
  }]
}, {
  "id": 24,
  "num": "024",
  "name": "Arbok",
  "img": "http://www.serebii.net/pokemongo/pokemon/024.png",
  "type": [
    "Poison"
  ],
  "height": "3.51 m",
  "weight": "65.0 kg",
  "candy": "Ekans Candy",
  "egg": "Not in Eggs",
  "spawn_chance": 0.072,
  "avg_spawns": 7.2,
  "spawn_time": "01:50",
  "multipliers": null,
  "weaknesses": [
    "Ground",
    "Psychic"
  ],
  "prev_evolution": [{
    "num": "023",
    "name": "Ekans"
  }]
}, 
{
    "id": 25,
    "num": "025",
    "name": "Pikachu",
    "img": "http://www.serebii.net/pokemongo/pokemon/025.png",
    "type": [
      "Electric"
    ],
    "height": "0.41 m",
    "weight": "6.0 kg",
    "candy": "Pikachu Candy",
    "candy_count": 50,
    "egg": "2 km",
    "spawn_chance": 0.21,
    "avg_spawns": 21,
    "spawn_time": "04:00",
    "multipliers": [2.34],
    "weaknesses": [
      "Ground"
    ],
    "next_evolution": [{
      "num": "026",
      "name": "Raichu"
    }]
  }, {
    "id": 26,
    "num": "026",
    "name": "Raichu",
    "img": "http://www.serebii.net/pokemongo/pokemon/026.png",
    "type": [
      "Electric"
    ],
    "height": "0.79 m",
    "weight": "30.0 kg",
    "candy": "Pikachu Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0076,
    "avg_spawns": 0.76,
    "spawn_time": "23:58",
    "multipliers": null,
    "weaknesses": [
      "Ground"
    ],
    "prev_evolution": [{
      "num": "025",
      "name": "Pikachu"
    }]
  },
  {
    "id": 27,
    "num": "027",
    "name": "Sandshrew",
    "img": "http://www.serebii.net/pokemongo/pokemon/027.png",
    "type": [
      "Ground"
    ],
    "height": "0.61 m",
    "weight": "12.0 kg",
    "candy": "Sandshrew Candy",
    "candy_count": 50,
    "egg": "5 km",
    "spawn_chance": 1.11,
    "avg_spawns": 111,
    "spawn_time": "01:58",
    "multipliers": [2.45],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "next_evolution": [{
      "num": "028",
      "name": "Sandslash"
    }]
  }, {
    "id": 28,
    "num": "028",
    "name": "Sandslash",
    "img": "http://www.serebii.net/pokemongo/pokemon/028.png",
    "type": [
      "Ground"
    ],
    "height": "0.99 m",
    "weight": "29.5 kg",
    "candy": "Sandshrew Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.037,
    "avg_spawns": 3.7,
    "spawn_time": "12:34",
    "multipliers": null,
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "prev_evolution": [{
      "num": "027",
      "name": "Sandshrew"
    }]
  },