import { useState, useEffect } from 'react';
import { Pokemon, newPokemon }from '../helpers/getPokemonInfo';
import Account from './Account';
import PokedexOverlay from './PokedexOverlay';
import PokemonCard from './PokemonCard';
import $ from 'jquery';
import './css/App.css';

const App = () => {

  const [ isPokemonOverlayVisible, setIsPokemonOverlayVisible ] = useState(false);
  const [ favorites, setFavorites ] = useState([]);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ currentUser, setCurrentUser ] = useState(localStorage.getItem('username'));

  useEffect(() => {
    getFavoritesFromDB();
    if(localStorage.getItem('username') !== '') {
      setIsLoggedIn(true);
      setCurrentUser(localStorage.getItem('username'));
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

  const handleLogin = async (username:string, password:string) => {
    await $.post('/api/login', {username:username,password:password}).then(item => {
      if(item) {
        localStorage.setItem('username', username);
        console.log('login successful');
        return true;
      } else {
        console.log('login failed');
        return false;
      }
    }).then(item => {
      if(item) {
        setCurrentUser(username);
        setIsLoggedIn(true);
      }
    })
  }

  const handleLogout = () => {
    localStorage.setItem('username','');
    setIsLoggedIn(false);
    setCurrentUser('');
  }
  

  return (
    <div className="App">
      <Account isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout}/>
      {localStorage.getItem('username')}
      <button className="overlay-search-button" onClick={handlePokemonSearchOverlayButton}>Pokedex</button>
      <PokedexOverlay isVisible={isPokemonOverlayVisible} savePoke={handleSavePokemon} loggedIn={isLoggedIn}/>
      <div className="temporary">
        Functionality to add: {"\n"}
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
