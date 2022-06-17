import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
  } from '@iconscout/react-unicons';

function TemperatureAndDetails() {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
          <p>Aquí va como está el tiempo</p>  
        </div>

        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img src="https://i.ytimg.com/vi/PDfWeUP09TA/hqdefault.jpg" alt="" className='w-20' />
            <p className='text-5xl'> 34º</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex font-ligth text-sm items-center justify-center'>
                    <UilTemperature size={18} className=''mr-1/>
                    Sensación real:
                    <span>34º</span>

                </div>
            </div>
        </div>
    </div>
  )
}

export default TemperatureAndDetails