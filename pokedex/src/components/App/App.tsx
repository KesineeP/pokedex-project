import React from 'react'
import './App.css';
import Pokedex from '../pokedex/Pokedex';
import Header from '../pokedex/Header';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Pokedex />
    </div>
  )
}
