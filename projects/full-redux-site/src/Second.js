import React from 'react';
import { connect } from 'react-redux';
import { getNewData } from './redux';

class Second extends React.Component {
    componentDidMount() {
        this.props.getNewData()
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Name: </h1>
                <h3>Coat of Arms: </h3>
                <h3>Founded: </h3>
            </div>
        )
    }
}

export default connect(state => state, { getNewData })(Second)