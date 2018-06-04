import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getData } from './redux';
import './first.css'
import jon from './images/jon.jpeg'

class First extends React.Component {
componentDidMount() {
    this.props.getData()
}

render() {
    return (
            <div>
                <div>
                <h1> { this.props.data.name } </h1>
                <h3> Aliase: { this.props.data.aliases[0] } </h3>
                <h3> Born: { this.props.data.born } </h3>
                <h3> Gender: { this.props.data.gender } </h3>
                <h3> Actor: { this.props.data.playedBy } </h3>
                <h3> Titles: { this.props.data.titles } </h3>
                </div>
                <img className='jon' src={jon} alt='jon snow' />
              </div>
    )
}
}


export default withRouter(connect(state => state, { getData })(First));
