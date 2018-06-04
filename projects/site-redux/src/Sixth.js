import React from 'react';
import { connect } from 'react-redux';
import { getDadJokes } from './redux';
import { withRouter } from 'react-router-dom';

class Sixth extends React.Component {
  componentDidMount() {
    this.props.getDadJokes()
  }
  render() {
    function refreshPage(){
        window.location.reload()
    }
    return (
      <div>
        <h1>Dad Jokes</h1>
        <h1> { this.props.dadJokes.joke }</h1>
        <button className='but' type="submit" onClick={refreshPage}>New Joke</button>
      </div>
    )
  }
}
export default withRouter(connect(state => state, { getDadJokes })(Sixth))
