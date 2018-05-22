import React from 'react';

const Ternary = (props) => {
    return(
        <div>
            { props.phrase === 'greeting' 
                ? <h1> Hello </h1>
                : <h1> Bye Bye </h1>  // if theres no second option use null
    }
        </div>       
    )
}

export default Ternary;