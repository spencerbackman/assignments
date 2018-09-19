import React from 'react'
import { connect } from 'react-redux'
import Comments from './Comments'

class Trails extends React.Component {
  constructor() {
    super()
    this.state = {
      isToggled: false
    }
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <h3> { this.props.city } </h3>
        <h3> { this.props.directions } </h3>
        <p> {Comments}</p>
      </div>
    )
  }
}

export default connect(state => state)(Trails)
