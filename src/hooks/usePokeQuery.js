import { useQuery } from '@tanstack/react-query';
import { pokeApi } from '../api/pokeApi';

export const usePokeQuery = () => {
  const getPokemons = async () => {
    try {
      const { data } = await pokeApi.get('/pokemon');
      const { results: pokemonList } = await data;
      const pokePromises = pokemonList.map(pokemon =>
        getPokeInfo(pokemon.name),
      );
      const pokemons = await Promise.all(pokePromises);
      return pokemons;
    } catch (error) {
      console.log(error);
    }
  };

  const getPokeInfo = async pokeName => {
    try {
      const { data } = await pokeApi.get(`/pokemon/${pokeName}`);
      return {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        types: data.types.map(type => type.type.name),
        sprites: {
          front_default: data.sprites.front_default,
          back_default: data.sprites.back_default,
          front_shiny: data.sprites.front_shiny,
          back_shiny: data.sprites.back_shiny,
        },
      };
    } catch (error) {
      console.log(error);
    }
  };

  const pokeQuery = useQuery(['pokemons'], getPokemons);
  return pokeQuery;
};
