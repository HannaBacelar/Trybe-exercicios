import React from 'react'

class Pokemon extends React.Component {
    render (){
        const { getPokemon } = this.props
        return (
            <div>
                <p>{ getPokemon.name }</p>
                <p>{ getPokemon.type }</p>
                <p>Average Weight: { getPokemon.averageWeight.value } { getPokemon.averageWeight.measurementUnit }</p>
                <img src={ getPokemon.image } alt={`Imagem do: ${getPokemon.name}`} />
            </div>
        )
    }
}
export default Pokemon;