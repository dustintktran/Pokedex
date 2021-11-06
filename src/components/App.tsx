import { useState, useEffect } from 'react';
import { Pokemon, newPokemon }from '../helpers/getPokemonInfo';
import Register from './Register';
import PokedexOverlay from './PokedexOverlay';
import PokemonCard from './PokemonCard';
import $ from 'jquery';
import './css/App.css';

const App = () => {

  const [ isPokemonOverlayVisible, setIsPokemonOverlayVisible ] = useState(false);
  const [ favorites, setFavorites ] = useState([]);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ username, setUsername ] = useState('');
  const [ currentUser, setCurrentUser ] = useState(localStorage.getItem('username'));

  useEffect(() => {
    getFavoritesFromDB();
    if(currentUser !== "") {
      setIsLoggedIn(true);
    }
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

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }
  
  const handleRegister = () => {

  }

  return (
    <div className="App">
      {!isLoggedIn && 
      <div>
        <Register />
        <span><button onClick={handleLogin}>Login</button></span>
      </div>}
      {isLoggedIn &&
      <div>
        <span><button onClick={handleLogout}>Logout</button></span>
      </div>
      }
      
      
      <button className="overlay-search-button" onClick={handlePokemonSearchOverlayButton}>Pokedex</button>
      <PokedexOverlay isVisible={isPokemonOverlayVisible} savePoke={handleSavePokemon}/>
      <div className="temporary">
        Functionality to add: {"\n"}
        Login and logout Functionality {"\n"}
        Favorites per account {"\n"}
        Search for pokemon moves {"\n"}
        Search for pokemon abilities {"\n"}
        Button on pokemon card for more details {"\n"}
        Page for where to find pokemon per game {"\n"}
        Team builder with suggestions? {"\n"}
      </div>
      <div className="favorites-outer">
      <div className="favorites-title">Favorites</div>
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
