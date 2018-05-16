import React from 'react';
import Place from './Place'


const Card = (props) => {
   const mapped = props.vacationSpots.map(places => {
      return (
        <Place spot={places.place}/>
      )
    })
    return (
        <div>
           
        </div>
    )
}

export default Card;