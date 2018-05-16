import React from 'react';

const Welcome = (props) => {
    console.log(props)
    return (
        <div style={{backgroundColor:'powderblue'}}>
            <h1>Title: {props.title}</h1>
            <h3>Subtitle: {props.subtitle}</h3>
            <h3>Info: {props.info}</h3>
        </div>
    )
}


export default Welcome;