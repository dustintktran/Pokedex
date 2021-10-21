import React, { FC, useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import './css/PokedexOverlay.css';

const PokedexOverlay = ( prop:{ isVisible:boolean }) => {

  const [input, setInput] = useState('');

  const handleSubmit = (e:any) => {

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
          <PokemonCard/>
        </div>
        {/* =====POKEMON CARD START===== */}
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