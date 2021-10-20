const pokeAPI:string = 'https://pokeapi.co/api/v2/pokemon/';

const firstToUpperCase = (input:string) => {
  let first = input[0];
  return first.toUpperCase() + input.substr(1);
}

const toLowerCase = (input:string) => {
  return input.toLowerCase();
}

export interface Pokemon 
{
  id:number;
  name:string;
  types:string[];
  stats:number[]; //[HP,Attack,Defense,Speed,SpAtk,SpDef]
  sprites:string[]; //[front,front-shiny,female,female-shiny]
}

export const newPokemon = (id:number, name:string, types:string[], stats:number[], sprites:string[]): Pokemon => ({
  id:id,
  name:name,
  types:types,
  stats:stats,
  sprites:sprites
})

const getPokemonInfo = async (nameOrId:string):Promise<Pokemon> => {

  let outputPokemon:Pokemon;
  return fetch(pokeAPI + toLowerCase(nameOrId))
  .then(response => response.json())
  .then(data => {
    let { id, name } = data;
    name = firstToUpperCase(name);
    let preStats = data.stats;
    let preSprites = data.sprites;
    let preTypes = data.types; 
    let stats:number[] = [];
    let sprites:string[] = [];
    let types:string[] = [];
    preStats.map((item:any) => {
      stats.push(item.base_stat);
    })
    sprites.push(preSprites.front_default);
    sprites.push(preSprites.front_shiny);
    if(preSprites.female_default) {
      sprites.push(preSprites.female_default);
      sprites.push(preSprites.female_shiny)
    }
    preTypes.forEach((item:any) => {
      types.push(firstToUpperCase(item.type.name));
    })
    outputPokemon = newPokemon(id, name, types, stats, sprites);
    return outputPokemon; 
  }).catch(err => {
    console.log(err);
    return newPokemon(0,'',[],[],[]);
  });
}

export default getPokemonInfo;
