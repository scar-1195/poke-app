import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { pokemonTypes } from '../helpers/pokemonTypes';

export const PokemonListing = ({ pokemon }) => {
  return (
    <div className='col-12'>
      <div className='flex flex-column xl:flex-row xl:align-items-start p-4 gap-4'>
        <img
          className='w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round'
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <div className='flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4'>
          <div className='flex flex-column align-items-center sm:align-items-start gap-3'>
            <div className='text-2xl font-bold text-900'>{pokemon.name}</div>
            <div className='flex align-items-center gap-3'>
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
          </div>
          <div className='flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2'>
            <span className='text-2xl font-semibold'>#{pokemon.id}</span>
            <Button
              icon='pi pi-shopping-cart'
              className='p-button-rounded'
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

PokemonListing.propTypes = {
  pokemon: PropTypes.object,
};
