import React from 'react';
import { connect } from 'react-redux';
import { getRonQuotes } from './redux';
import { withRouter } from 'react-router-dom';

class Seven extends React.Component {
  componentDidMount() {
    this.props.getRonQuotes()
  }
  render() {
    function refreshPage(){
        window.location.reload()
    }
    return (
      <div>
      <h1> Quotes by Ron Swanson </h1>
        <h1> { this.props.ronQuotes } </h1>
        <button className='but' type="submit" onClick={refreshPage}>New Quote</button>
      </div>
    )
  }
}
export default withRouter(connect(state => state, { getRonQuotes })(Seven))
