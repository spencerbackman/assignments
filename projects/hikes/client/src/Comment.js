import React from 'react'
import {connect} from 'react-redux'
import {addComment} from './redux/commentredux';

class Comment extends React.Component {
  componentDidMount() {
    this.props.addComment();
  }
  handleChange = e => {
    const { name, value } = e.target
    this.setState({
        [name]: value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    const newComment = {
        name: this.state.name,
        body: this.state.body
    }
    this.props.addComment(newComment)
    this.setState({ isToggled:false, name: '', body: ''})
  }
  toggle = () => {
    this.setState(prevState => {
        return {
            isToggled: !prevState.isToggled
        }
    })
  }
render() {
    return(
        <div>
          <p>{this.props.name}</p>
          <p>{this.props.body}</p>
          <button onClick={ this.toggle }>Comment</button>
              { this.state.isToggled 
              ? <form onSubmit={ this.handleSubmit }>
                  <input 
                      type="text"
                      value={ this.state.name } 
                      name="name"
                      placeholder="name"
                      onChange={this.handleChange} />
                  <input 
                      type="text"
                      value={ this.state.body}
                      name="body"
                      placeholder="comment"
                      onChange={ this.handleChange } />
                  <button onSubmit={ this.handleSubmit }>submit</button>
                  </form>
                  :null
              }
        </div>
    )
  }
}

export default connect(state => state, {addComment})(Comment) 
