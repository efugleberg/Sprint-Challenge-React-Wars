import React from 'react';
import StarWarsCharacter from './StarWarsCharacter';

import './StarWars.css';

const StarWarsArray = props => {
    return (
        <div className='starWarsArray'>
            {props.starwarsChars.map(item => (
                <StarWarsCharacter key={item.created} item={item} />
            ))}
        </div>
    )
}

export default StarWarsArray;