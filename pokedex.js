function Pokemon(nombre,color,puntosAtaque){
  this.nombre = nombre;
  this.nivelDeAmistad = 0;
  this.vida = 100;
  this.puntosAtaque = puntosAtaque;
  this.color = color;

  this.saludar = function(){
    console.log("Hola, me llamo " + this.nombre)
  };

  this.pelear = function(pokemonObjeto){
    pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque
  }

  this.beber = function(tipoAlcohol){
    if(tipoAlcohol == "chelas"){
      this.nivelDeAmistad += 80
    }
    else if (tipoAlcohol == "vodka") {
      this.nivelDeAmistad += 10
    }
  };
}

var pokemons = []

function crearPokemon(){
  var nombrePokemon = document.getElementById("nombrePokemon")
  var colorPokemon = document.getElementById("colorPokemon")
  var puntosAtaque = document.getElementById("puntosAtaque")

  var pokemon = new Pokemon(nombrePokemon.value,
                            colorPokemon.value,
                            parseInt(puntosAtaque.value)
                          )
  pokemons.push(pokemon)
  mostrarPokemons()

}

function mostrarPokemons(){
  var listaPokemons = document.getElementById("listaPokemons")

  var lista = document.createElement("ul")

  pokemons.forEach(function(pokemon){
    var elemento = document.createElement("li")

    elemento.innerText = pokemon.nombre + pokemon.color + pokemon.puntosAtaque
    lista.appendChild(elemento)
  })

  listaPokemons.appendChild(lista)

}
