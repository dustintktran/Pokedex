import React, { FC } from 'react';
import sprite from '../resources/scizor_front_sprite.png';
import star from '../resources/yellowStar.png';
import './css/PokemonCard.css';

const PokemonCard = () => {

  
  return (
    <div className="pokemon-outer">
      <div className="pokemon-top">
        <img className="pokemon-image" src={sprite}></img>
        <div className="pokemon-filler"></div>
      </div>
      <div className="pokemon-bottom">
        <div className="pokemon-info">
          Scizor
        </div>
      </div>
      {/*========== ^ UNDERNEATH ^ ==========*/}
      <div className="pokemon-overlay">
        <img className="pokemon-overlay-image" src={sprite}></img>
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
          ID: 212 <br />
          Name: Scizor <br />
          <span>Types: Bug, Steel</span>
          {/*types.length === 1 && <span>Type: {capitalizeFirstLetter(types[0].type.name)}</span>*/}
          {/*types.length >= 2 && <span>Types: {capitalizeFirstLetter(types[0].type.name)} | {capitalizeFirstLetter(types[1].type.name)}</span>*/}
          <br />
          <div className="stats-outer">
            <div className="stats-row">
              HP: 100 Atk: 100 Def: 100
            </div>
            <div className="stats-row">
              Spd: 100 SpA: 100 SpD: 100
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;