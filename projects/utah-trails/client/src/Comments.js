import React from 'react'
import { connect } from 'react-redux'
import { addComment, getComments } from './redux'

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      names: '',
      body: '',
      date: '',
      isToggled: false
  }
}

componentDidMount() {
  this.props.getComments()
}

handleChange = (e) => {
  const { name, value } = e.target
  this.setState({
    [name]: value
  })
  console.log(this.getState())
}

handleSubmit = e => {
  e.preventDefault();
  const newComment = {
    names: this.state.names,
    body: this.state.body,
    date: this.state.date
  }
  this.props.addComment(newComment);
  this.setState({isToggled:false, names: '', body: '', date: ''})
}

toggle = () => {
  this.setState(prevState => {
return {
  isToggled: !prevState.isToggled
}
})
}
render() {
  console.log(this.props)
  return (
    <div>
      <h3>  </h3>
      <button onClick={ this.toggle }>Comment</button>
      {this.state.isToggled
      ? <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.names}
          name="names"
          placeholder="name"
          onChange={this.handleChange} />
        <input
          type="text"
          value={this.state.body}
          name="body"
          placeholder="comment"
          onChange={this.handleChange} />
          <button>Submit</button>
      </form>
      : null
  }
    </div>
  )
}
}

export default connect(state => state, {addComment, getComments})(Comments)
