import React, { FC, useState, useEffect } from 'react';

const PokedexOverlay = ( prop:{ isVisible:boolean }) => {

  const [input, setInput] = useState('');

  const handleSubmit = (e:any) => {

  }

  if(prop.isVisible) {
    return (
      <div className="pokedex-overlay">
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