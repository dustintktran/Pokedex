import { useState, useEffect } from 'react';
import $ from 'jquery';
import PokemonCard from './PokemonCard';
import './css/PokedexOverlay.css';
import { Pokemon, newPokemon}from '../helpers/getPokemonInfo';
import getPokemonInfo from '../helpers/getPokemonInfo';
// import addPokemonToDatabase from '../helpers/addPokemonToDB';

const PokedexOverlay = ( prop:{ isVisible:boolean }) => {

  const [input, setInput] = useState('');
  const [currentPokemon, setCurrentPokemon] = useState(newPokemon(0,'',[],[],[]));

  const handleSubmit = (e:any) => {
    handleSetPokemon(input);
    setInput('');
  }

  const handleSetPokemon = async (nameOrId:string) => {
    let poke = await getPokemonInfo(nameOrId);
    if(poke.id !== 0) {
      setCurrentPokemon(poke);
    }
  }

  const handleSavePokemon = (poke:Pokemon) => {
    let { id, name, types, stats, sprites } = poke;
    console.log('addPokemonToDB');
    $.post('http://localhost:8080/api/add', {pokemon: poke}).then(() => console.log('added'));
  }

  if(prop.isVisible) {
    return (
      <div className="pokedex-overlay">
        {/* =====INPUT AND SEARCH BUTTON BEGIN===== */}
        <div className="search-outer">
          <span className="search-main">
            <input className="search-bar" 
              onChange={event => setInput(event.target.value)} 
              value={input} 
              onKeyDown={(e) => { 
                if (e.key === 'Enter') { handleSubmit(e)}}}></input>
            <button className="search-button" onClick={handleSubmit}>Search</button>
          </span>
        </div>
        {/* =====INPUT AND SEARCH BUTTON END===== */}
        {/* =====POKEMON CARD START===== */}
        <div className="pokemoncard-outer">
          {currentPokemon.id!==0 && <PokemonCard pokemon={currentPokemon}/>}
        </div>
        {/* =====POKEMON CARD END===== */}
        <div className="save-outer">
        <button className="save-button" onClick={() => handleSavePokemon(currentPokemon)}>Save To Favorites</button>
        </div>
        
      </div>
    )
  } else {
    return null;
  }
  
  
};

export default PokedexOverlay;


/*
Query Layout:
Search bar, Button
*/