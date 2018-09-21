import React from 'react'
import {connect} from 'react-redux'

class Addcomment extends React.Component {
  constructor() {
    super();
    this.state = {
        name: '',
        body: ''
    }
}
componentDidMount() {
    this.props.addComment();
}

render() {
    return(
        <div>
          <p>hello</p>

        </div>
    )
}
}

export default connect(state => state)(Addcomment) 