import React from 'react'
import './spinner.css'
import pokeballLoader from '../../content/pokeball_loader.png'

const Spinner = () => {
  return (
    <div className='spinner-container'>
        <div className='loading-spinner'>
          <img className='pokeball-loader' src={pokeballLoader}></img>
        </div>
    </div>
  )
}

export default Spinner