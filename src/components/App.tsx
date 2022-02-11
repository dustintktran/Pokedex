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
    if(localStorage.getItem('username') !== '') {
      setIsLoggedIn(true);
      setCurrentUser(localStorage.getItem('username'));
    } 
    console.log(isLoggedIn);
    getFavoritesFromDB();
  },[JSON.stringify(favorites), isLoggedIn, currentUser])

  const handlePokemonSearchOverlayButton = () => {
    setIsPokemonOverlayVisible(!isPokemonOverlayVisible);
  }

  const getFavoritesFromDB = async () => {
    if(!isLoggedIn) return;
    const fav = await $.get('/api/getFav', {team_id: localStorage.getItem('team_id')})
    setFavorites(fav);
  }

  const handleSavePokemon = async (poke:Pokemon, team:number) => {
    let { id, name, types, stats, sprites } = poke;
    await $.post(`/api/add`, {pokemon: poke, team_id:team})
    getFavoritesFromDB();
  }

  const handleLogin = async (username:string, password:string) => {
    const login = await $.post('/api/login', {username:username,password:password})
      if(login) {
        localStorage.setItem('username', username);
        localStorage.setItem('profile_id', login.id);
        localStorage.setItem('team_id', login.team_id);
        setCurrentUser(username);
        setIsLoggedIn(true);
        console.log('login successful');
      } else {
        console.log('login failed');
      }
  }

  const handleLogout = () => {
    localStorage.setItem('username','');
    localStorage.setItem('profile_id', '');
    localStorage.setItem('team_id', '');
    setIsLoggedIn(false);
    setCurrentUser('');
    setFavorites([]);
  }
  

  return (
    <div className="App">
      <Account isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout}/>
      <button className="overlay-search-button" onClick={handlePokemonSearchOverlayButton}>Pokedex</button>
      
      <PokedexOverlay isVisible={isPokemonOverlayVisible} savePoke={handleSavePokemon} loggedIn={isLoggedIn}/>
      <div className="temporary">
        Functionality to add: {"\n"}
        DONE -- Favorites per account {"\n"}
        Search for pokemon moves {"\n"}
        Search for pokemon abilities {"\n"}
        Button on pokemon card for more details {"\n"}
        Page for where to find pokemon per game {"\n"}
        Team builder with suggestions? {"\n"}
        Pokemon forms Ids start at 10000
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
