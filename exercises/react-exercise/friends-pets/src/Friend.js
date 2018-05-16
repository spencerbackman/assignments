import React from 'react';
import Pet from './Pet'


const Friend = (props) => {

    const mappedPets = props.pets.map(pet => {
        return (
            <Pet name={pet.name} breed={pet.breed} />
        )
    });

    return(
        <div>
            <h1>Name: { props.name }</h1>
            <h3>Age: {props.age} </h3>
            <h3>Pets: </h3>
            {mappedPets}
        </div>
    )
}

export default Friend;