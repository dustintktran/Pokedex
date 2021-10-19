import React, { FC, useState, useEffect } from 'react';
import PokedexOverlay from './PokedexOverlay';

const App = () => {

  const [isPokemonOverlayVisible, setIsPokemonOverlayVisible] = useState(false);
  const handleModalClick = () => {
    setIsPokemonOverlayVisible(!isPokemonOverlayVisible);
  }

  return (
    <div className="App">
      <button className="search-button" onClick={handleModalClick}>Pokedex</button>
      <PokedexOverlay isVisible={isPokemonOverlayVisible}/>
    </div>
  )
}
export default App;
