import { checkError } from './client';


export async function getPokemon(filter) {
  const rawData = await fetch(`/.netlify/functions/pokemon?pokeQuery=${filter}`);
  const data = await rawData.json();
  console.log(data.results);
  return data.results;
}

export async function getYelp(filter) {
  
  const rawData = await fetch(`/.netlify/functions/yelp?yelpQuery=${filter}`);
  const data = await rawData.json();
  
  return data;
}