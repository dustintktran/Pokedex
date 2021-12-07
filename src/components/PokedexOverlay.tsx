import { useState, useEffect } from 'react';
import $ from 'jquery';
import PokemonCard from './PokemonCard';
import './css/PokedexOverlay.css';
import { Pokemon, newPokemon }from '../helpers/getPokemonInfo';
import getPokemonInfo from '../helpers/getPokemonInfo';

const PokedexOverlay = ( prop:{ isVisible:boolean, savePoke:any, loggedIn:boolean }) => {

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
        {prop.loggedIn && 
        <button className="save-button" onClick={() => prop.savePoke(currentPokemon)}>Save To Favorites</button>
        }
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