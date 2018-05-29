import React from 'react';

const Form = props => {
    const { name, email, phone } = props;
    return (
        <div>
            <h3> {props.name} </h3>
            <h3> {props.email} </h3>
            <h3> {props.phone} </h3>
        </div>
    )
}

export default Form;