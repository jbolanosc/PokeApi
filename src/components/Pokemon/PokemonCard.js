import React, { Component } from 'react';
import axios from 'axios';

import CardComponent from '../layout/CardComponent';

export default class PokemonCard extends Component {

    state = {
        pokemon: {
            name: '',
            avatar: '',
            types: []
        }
    }

    componentDidMount(){
        this.loadPokemon();
    }

    async loadPokemon(){
        let res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + this.props.pokemon);
        this.setState({
            pokemon: {
                name: res.data.name,
                avatar: res.data.sprites.front_default,
                types: res.data.types
            }
        })
    }

    render() {
        return (
            <CardComponent pokemon={this.state.pokemon}/>
        )
    }
}

