import React from 'react';
import { connect } from 'react-redux';
import Pidgeon from './Pidgeon';

function List(props) {
    const { pidgeons } = props;
    return (
        <div>
            {pidgeons.map((pidgeon, i) => <Pidgeon key={i}
             {...pidgeon} index={i} />)}
        </div>
    )
}

export default connect(state => ({pidgeons: state}), {}) (List);