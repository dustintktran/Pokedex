import { useState, useEffect } from 'react';
import PokedexOverlay from './PokedexOverlay';
import $ from 'jquery';
import './css/App.css';

const App = () => {

  const [isPokemonOverlayVisible, setIsPokemonOverlayVisible] = useState(false);
  const [ favorites, setFavorites ] = useState([]);

  useEffect(() => {
    getFavoritesFromDB();
  })

  const handlePokemonSearchOverlayButton = () => {
    setIsPokemonOverlayVisible(!isPokemonOverlayVisible);
  }

  const getFavoritesFromDB = () => {
    $.get('http://localhost:8080/api/getFav').then(item => {
      console.log(item);
    })
  }

  return (
    <div className="App">
      <button className="overlay-search-button" onClick={handlePokemonSearchOverlayButton}>Pokedex</button>
      <PokedexOverlay isVisible={isPokemonOverlayVisible}/>
      <div className="favorites-outer"></div>
    </div>
  )
}
export default App;
