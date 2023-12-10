import React from 'react'

export default function PokedexCard() {
  return (
    <div className="card-container">
        <h3 className="name">Name
        </h3>
      
        {/*add pokemon image*/}
        <ul>
            <li>Level: 2</li>
            <li>Weight: 6</li>
            <li>Species: Fire</li>
        </ul>
    </div>
  )
}
