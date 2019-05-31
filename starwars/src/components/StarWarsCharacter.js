import React from 'react';

import './StarWars.css';


const StarWarsCharacter = props => {
    return (
        <div className='characters'>
            <p>Name: {props.item.name}</p>
            <p>Mass: {props.item.mass}</p>
            <p>Height: {props.item.height}</p>
        </div>
    )
}

export default StarWarsCharacter;