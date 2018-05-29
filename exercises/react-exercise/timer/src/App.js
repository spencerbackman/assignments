import React from 'react';
import { connect } from 'react-redux';
import Timer from './Timer';
import Controls from './Controls';

class App extends React.Component {
    render() {
        return (
            <div>
                <Timer />
                <Controls />
            </div>
        )
    }
}