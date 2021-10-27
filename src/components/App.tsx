import { useState, useEffect } from 'react';
import { Pokemon, newPokemon }from '../helpers/getPokemonInfo';
import PokedexOverlay from './PokedexOverlay';
import PokemonCard from './PokemonCard';
import $ from 'jquery';
import './css/App.css';

const App = () => {

  const [isPokemonOverlayVisible, setIsPokemonOverlayVisible] = useState(false);
  const [ favorites, setFavorites ] = useState([]);

  useEffect(() => {
    getFavoritesFromDB();
  },[])

  const handlePokemonSearchOverlayButton = () => {
    setIsPokemonOverlayVisible(!isPokemonOverlayVisible);
  }

  const getFavoritesFromDB = () => {
    $.get('/api/getFav').then(item => {
      console.log('in get favs ', item);
      setFavorites(item);
    })
  }

  const handleSavePokemon = (poke:Pokemon) => {
    let { id, name, types, stats, sprites } = poke;
    console.log('addPokemonToDB');
    $.post(`/api/add`, {pokemon: poke}).then((item) => {
      console.log(item + ' added');
      getFavoritesFromDB();
    });
  }

  return (
    <div className="App">
      <button className="overlay-search-button" onClick={handlePokemonSearchOverlayButton}>Pokedex</button>
      <PokedexOverlay isVisible={isPokemonOverlayVisible} savePoke={handleSavePokemon}/>
      <div className="favorites-outer">
      <span>Favorites</span>
      {favorites.map(item => {
        return (<div className="pokemon-card-slot">
        <PokemonCard pokemon={item}/>
        </div>)
      })}
      </div>
    </div>
  )
}
export default App;
