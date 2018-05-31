import React from 'react';
import { connect } from 'react-redux';
import { getRonQuotes } from './redux';
import { withRouter } from 'react-router-dom';

class Seven extends React.Component {
  componentDidMount() {
    this.props.getRonQuotes()
  }
  render() {
    return (
      <div>
        <h1> { this.props.ronQuotes } </h1>
      </div>
    )
  }
}
export default withRouter(connect(state => state, { getRonQuotes })(Seven))
