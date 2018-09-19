import React from 'react'
import { connect } from 'react-redux'
import {addComment} from './redux'
import Comment from './Comment'

class Trail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [{
        name: '',
        body: '',
        trailId: ''
      }],
      isToggled:false
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const newComment = {
      name: this.state.name,
      body: this.state.body,
      trailId: this.state.id
    }
    this.props.addComment(this.props.id, newComment);
    this.setState({isToggled: false, name: '', body: '', trailId: ''})
  }
  toggle = () => {
    this.setState(prevState => {
      return {
        isToggled: !prevState.isToggled
      }
    })  
  }
  render() {
    const activity = this.props.activities.map(act => 
    <Comment url={act.url} description={act.description}  />)
    return (
      <div>
        <p> {this.props.names} </p>
        <p> {this.props.city} </p>
        <p> {this.props.directions} </p>
        <p>{activity}</p>
        <button onClick={ this.toggle }>Comment </button>
          {this.state.isToggled
            ? <form onSubmit={ this.handleSubmit }>
              <input
                type="text"
                value={ this.state.name }
                name="name"
                placeholder="name"
                onChange={ this.handleChange } />
              <input
                  type="text"
                  value={this.state.body}
                  name="body"
                  placeholder="body"
                  onChange={ this.handleChange } />
                <input 
                  type="id"
                  value={this.props.id}
                  name="id"
                  placeholder={this.props.id}/>
                <button>Submit</button>
              </form>
            : null }
      </div>
    )
  }
}

export default connect(state => state, {addComment})(Trail)
