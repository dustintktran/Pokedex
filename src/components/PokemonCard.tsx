
import {Pokemon} from '../helpers/pokemonAPIFunctions'
import sprite from '../resources/scizor_front_sprite.png';
import star from '../resources/yellowStar.png';
import './css/PokemonCard.css';

const PokemonCard = (prop:{pokemon:Pokemon}) => {

  let { id,name,types,stats,sprites } = prop.pokemon;
  return (
    <div className="pokemon-outer">
      <div className="pokemon-top">
        <img className="pokemon-image" src={sprites[0]}></img>
        <div className="pokemon-filler"></div>
      </div>
      <div className="pokemon-bottom">
        <div className="pokemon-info">
          {name}
        </div>
      </div>
      {/*========== ^ UNDERNEATH ^ ==========*/}
      <div className="pokemon-overlay">
        <img className="pokemon-overlay-image" src={sprites[0]}></img>
        <button className="favorite-button">
          <img className="favorite-image" src={star} />
        </button>
        {/*!favorite && <button className="favorite-button" onClick={() => {
          props.handleFavorite(props.pokemon, () => {
            setFav(!favorite);
          });
        }}><img className="favorite-image" src={'./resources/yellowStar.png'} /></button>}
        {favorite && <button className="favorite-button" onClick={() => {
          props.handleFavorite(props.pokemon, () => {
            setFav(!favorite);
          });
        }}><img className="favorite-image" src={'./resources/redStar.png'} /></button>*/}

        <div className="pokemon-overlay-bottom">
          <br /><br /><br />
          ID: {id} <br />
          Name: {name} <br />
          {types.length === 1 && <span>Type: {types[0]}</span>}
          {types.length >= 2 && <span>Types: {types[0]} | {types[1]}</span>}
          <br />
          <div className="stats-outer">
            <div className="stats-row">
              HP: {stats[0]} Atk: {stats[1]} Def: {stats[2]}
            </div>
            <div className="stats-row">
              Spd: {stats[3]} SpA: {stats[4]} SpD: {stats[5]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;