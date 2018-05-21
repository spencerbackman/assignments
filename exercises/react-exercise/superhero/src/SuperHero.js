import React from 'react';


const SuperHero = (props) => {
    return (
        <div style={{background: url(`${props.imgUrl}`)}}>
        
            <h1> Name: {props.name} </h1>
            <button onClick={()=>props.sayCatchphrase(props.catchPhrase)}>Say Catchphrase</button>
        </div>
    )
}

export default SuperHero;