import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getJokeData } from './redux';


class Fifth extends React.Component {
  componentDidMount() {
    this.props.getJokeData()
  }
  render() {
    return (
      <div>
        <h3> {this.props.jokeData.setup} </h3>
        <h3> {this.props.jokeData.punchline} </h3>
      </div>
    )
  }
}


export default withRouter(connect(state => state, { getJokeData })(Fifth))
