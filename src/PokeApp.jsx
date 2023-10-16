import { usePokeQuery } from './hooks';

export const PokeApp = () => {
  const pokemons = usePokeQuery();

  if (pokemons.isLoading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <>
      {pokemons.data.results.map(pokemon => (
        <li key={pokemon.url}>{pokemon.name}</li>
      ))}
    </>
  );
};
