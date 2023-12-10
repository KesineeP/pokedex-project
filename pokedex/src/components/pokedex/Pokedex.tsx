import React from 'react'
import SearchBar from './SearchBar'
import PokedexList from './PokedexList'

export default function Pokedex() {
  return (
    <div className='pokedex-container'>
      <SearchBar />
      <PokedexList />
    </div>
  )
}
