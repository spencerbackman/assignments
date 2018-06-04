import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getJokeData } from './redux';
import './fifth.css';


class Fifth extends React.Component {
  componentDidMount() {
    this.props.getJokeData()
  }
  render() {
    function refreshPage(){
        window.location.reload()
    }
    return (
      <div className='div'>
      <h1>Jokes</h1>
        <h3> {this.props.jokeData.setup} </h3>
        <h3> {this.props.jokeData.punchline} </h3>
        <button className='but' type="submit" onClick={refreshPage}>New Joke</button>
      </div>
    )
  }
}

export default withRouter(connect(state => state, { getJokeData })(Fifth))
