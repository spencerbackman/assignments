import React from 'react';



const Pet = (props) => {

    return (
        <div>
            <h3> Name: {props.name}, Breed: {props.breed}</h3>
        </div>
    )
}

export default Pet;