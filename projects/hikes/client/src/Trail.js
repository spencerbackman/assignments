import React from 'react'
import { connect } from 'react-redux'

class Trail extends React.Component {

  render() {
    return(
      <div>
        <h3>{this.props.names}</h3>
        <h5>{this.props.city}</h5>
        <h5>{this.props.directions}</h5>
      </div>
    )
  }
}

export default connect(state => state)(Trail)
