import React from 'react';
import { connect } from 'react-redux';
import { getNewData } from './redux';
import { withRouter } from 'react-router-dom';
import './second.css';
import './third.css';
import winter from './images/winter.jpeg'

class Second extends React.Component {
    componentDidMount() {
        this.props.getNewData()
    }

    render() {
        return (
            <div>
                <h1>Name: { this.props.houseData.name }  </h1>
                <h3>Region: { this.props.houseData.region} </h3>
                <h3>Coat of Arms: { this.props.houseData.coatOfArms } </h3>
                <h3>Founded: { this.props.houseData.founded } </h3>
                <h3>Words: { this.props.houseData.words }</h3>
                <h3>Ancestarial Weapons: { this.props.houseData.ancestralWeapons }</h3>
                <img className="winter" src={winter} alt='winterfell castle' />
            </div>
        )
    }
}

export default withRouter(connect(state => state, { getNewData })(Second));
