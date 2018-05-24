import React from 'react';

function Pidgeon(props) {
    const {nickname, imgUrl} = props;
    return (
        <div>
            <h3> {nickname} </h3>
            <img src={imgUrl} alt=""/>
            <button>X</button>
        </div>
    )
}

export default Pidgeon;