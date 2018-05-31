import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getBookData } from './redux';
import game from "./images/game.jpeg"

class Fourth extends React.Component {
  componentDidMount() {
    this.props.getBookData()
  }
  render() {
    console.log(this.props.bookData)
    return (
      <div>
          <h1> {this.props.bookData.name} </h1>
          <h3> Author: {this.props.bookData.authors} </h3>
          <h3> Number of Pages: { this.props.bookData.numberOfPages } </h3>
          <h3> Publisher: { this.props.bookData.publisher } </h3>
          <div>
          <img className='snow' src={game} alt='got' />
          </div>
      </div>
    )
  }
}

export default withRouter(connect(state => state, { getBookData })(Fourth));
