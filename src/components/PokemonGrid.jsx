import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { pokemonTypes } from '../helpers/pokemonTypes';

export const PokemonGrid = ({ pokemon }) => {
  return (
    <div className='col-12 sm:col-6 lg:col-12 xl:col-4 p-2'>
      <div className='p-4 border-1 surface-border surface-card border-round'>
        <div className='flex flex-wrap align-items-center justify-content-between gap-2'>
          {pokemon.types.map(type => (
            <Tag
              key={type}
              style={{
                backgroundColor: pokemonTypes(type),
                borderRadius: '2rem',
                fontSize: '1rem',
                height: '2.5rem',
                width: '8rem',
              }}
            >
              {type}
            </Tag>
          ))}
        </div>
        <div className='flex flex-column align-items-center gap-3 py-5'>
          <img
            className='w-9 shadow-2 border-round'
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <div className='text-2xl font-bold'>{pokemon.name}</div>
        </div>
        <div className='flex align-items-center justify-content-between'>
          <span className='text-2xl font-semibold'>#{pokemon.id}</span>
          <Button
            icon='pi pi-shopping-cart'
            className='p-button-rounded'
          ></Button>
        </div>
      </div>
    </div>
  );
};

PokemonGrid.propTypes = {
  pokemon: PropTypes.object,
};
