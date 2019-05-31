import React from 'react';

import './StarWars.css';


const StarWarsCharacter = props => {
    return (
        <div className='characters'>
            <p className="name">Name: {props.item.name}</p>
            <p>Height: {props.item.height/30.48}</p>
            <p>Mass: {props.item.mass*2.205}</p>
            <p>Hair Color: {props.item.hair_color}</p>
            <p>Gender: {props.item.gender}</p>
        </div>
    )
}

export default StarWarsCharacter;