import React from 'react';
import { useState, useEffect } from 'react';
import { getPokemon } from './services/fetch-utils';


export default function PokemonSearch() {
  
  const [pokemon, setPokemon] = useState([]);
  const [pokemonQuery, setPokemonQuery] = useState('');
  
  async function grabAndStorePoke() {
      
    
    const data = await getPokemon(pokemonQuery);
    setPokemon(data.results);
  }
  
  useEffect(() => {
    grabAndStorePoke();
    
  }, []);
  
  
  async function handleSubmit(e) {
    e.preventDefault();
      
    const data = await getPokemon(pokemonQuery);
    setPokemon(data.results);
    setPokemonQuery('');
  
  }
  
  
  return (
    <><div className="Pokemon" />
      <form onSubmit={handleSubmit}>
        <input onChange={e => setPokemonQuery(e.target.value)} />
        <button>Search Pokemon</button>
      </form>
      {
        pokemon.map((poke, i) => <div key={poke.pokemon + i} className='pokemon'>
          <h3>{poke.pokemon}</h3>
          <img src={poke.url_image} />
        </div>)
      };
    </>
  
      
  );
}