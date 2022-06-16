import React from 'react'
import { UilSearch, UilLocationPoint  } from '@iconscout/react-unicons'


function Inputs() {
  return (
    
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-2/3 items-center justify-center space-x-4'>
        <input 
            type='text'
            placeholder='Buscar...'
            className='text-xl font-ligth p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
            />
            <UilSearch 
              size={25} 
              className='text-white cursor-pointer transition ease-out hover:scale-125 '
            />
            <UilLocationPoint 
              size={25} 
              className='text-white cursor-pointer transition ease-out hover:scale-125 '
            />
      </div>

      <div className='flex flex-row w-1/4 items-center justify-center'>
          <button name='metric' className='text-white font-light text-lg '>
              ºC
          </button>
            <p className='text-xl text-white mx-1'></p>
          <button name='imperial' className='text-white font-light text-lg'>
              ºF
          </button>

      </div>


    </div>
  )
}

export default Inputs