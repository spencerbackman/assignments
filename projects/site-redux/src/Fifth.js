import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getJokeData, getDadJokes, getRonQuotes } from './redux';

class Fifth extends React.Component {
  componentDidMount() {
    this.props.getJokeData();
    this.props.getDadJokes();
    this.props.getRonQuotes();
  }
  render() {
    function refreshPage(){
        window.location.reload()
    }
    return (
      <div className="jokes-quotes">
      <div className='joke'>
        <h1 className="header">Joke</h1>
        <h3> {this.props.jokeData.setup} </h3>
        <h3> {this.props.jokeData.punchline} </h3>
      </div>
      <br/>
      <div className="dad-jokes">
        <h1 className="header">Dad Joke</h1>
        <h3> { this.props.dadJokes.joke }</h3>
      </div>
      <br/>
      <div className="ron-quotes">
        <h1 className="header"> Quote by Ron Swanson </h1>
        <h3> { this.props.ronQuotes } </h3>
        <button className='but' type="submit" onClick={refreshPage}>New Jokes and Quote</button>
      </div>
      </div>
    )
  }
}

export default withRouter(connect(state => state, { getJokeData, getDadJokes, getRonQuotes })(Fifth))
