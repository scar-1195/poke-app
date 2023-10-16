import { useState } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { PokemonGrid, PokemonListing } from './';
import { usePokeQuery } from '../hooks';

export const PokemonList = () => {
  const [layout, setLayout] = useState('grid');
  const { data, isLoading } = usePokeQuery();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  const itemTemplate = (pokemon, layout) => {
    if (layout === 'list') return <PokemonListing pokemon={pokemon} />;
    else if (layout === 'grid') return <PokemonGrid pokemon={pokemon} />;
  };

  const header = () => {
    return (
      <div className='flex justify-content-end'>
        <DataViewLayoutOptions
          layout={layout}
          onChange={e => setLayout(e.value)}
        />
      </div>
    );
  };

  return (
    <>
      <div className='card'>
        <DataView
          value={data}
          itemTemplate={itemTemplate}
          layout={layout}
          header={header()}
        />
      </div>
    </>
  );
};
