import React from 'react';
import { connect } from 'react-redux';
import { getDadJokes } from './redux';
import { withRouter } from 'react-router-dom';

class Sixth extends React.Component {
  componentDidMount() {
    this.props.getDadJokes()
  }
  render() {
    return (
      <div>
        <h1> { this.props.dadJokes.joke }</h1>
      </div>
    )
  }
}
export default withRouter(connect(state => state, { getDadJokes })(Sixth))
