import React from 'react';

const Counter = props => {
    return (
        <div>
            <h1> {props.count} </h1>
            <button onClick={props.add}>+1</button>
            <button onClick={props.sub}>-1</button>
        </div>
    )
}

export default Counter;