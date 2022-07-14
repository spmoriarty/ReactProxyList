import React from 'react';
import { useState, useEffect } from 'react';
import { getPokemon } from './services/fetch-utils';


export default function PokemonSearch() {
  
  const [pokemon, setPokemon] = useState([]);
  const [pokemonInput, setPokemonInput] = useState('');
  const [pokemonQuery, setPokemonQuery] = useState(pokemonInput);

  async function grabAndStorePoke() {
    
    
    const data = await getPokemon(pokemonQuery);
    
    setPokemon(data);
  }
  
  useEffect(() => {
    grabAndStorePoke();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  
  async function handleSubmit(e) {

    e.preventDefault();
    setPokemonQuery(pokemonInput);
    
    const data = await getPokemon(pokemonQuery);
    setPokemon(data.results);
    setPokemonQuery('');
  
  }
  
  
  return (
    <><div className="Pokemon" />
      <form onSubmit={handleSubmit}>
        <input onChange={e => setPokemonInput(e.target.value)} />
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