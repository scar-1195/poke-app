import { useQuery } from '@tanstack/react-query';
import { pokeApi } from '../api/pokeApi';

export const usePokeQuery = () => {
  const getPokemons = async () => {
    const { data } = await pokeApi.get('/pokemon');
    return data;
  };

  const pokeQuery = useQuery(['pokemons'], getPokemons);
  return pokeQuery;
};
