import React from 'react';
import Pokemon from './Pokemon'
import pokemons from './data'

class Pokedex extends React.Component {
    render (){
        return (
            <div>
                <h1>Pokedex</h1>
                {
                    pokemons.map((objPokemon) =>
                    <Pokemon getPokemon={ objPokemon }/>
                    )
                }
            </div>
        )
    }
}
export default Pokedex;