import React from 'react'
import { connect } from 'react-redux'

class Trail extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     body: '',
  //     date: '',
  //     isToggled:false
  //   }
  // }

  // handleChange = e => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value
  //   })
  // }

//   handleSubmit = e => {
//     e.preventDefault();
//     const newComment = {
//       name: this.state.name,
//       body: this.state.body,
//       date: this.state.date,
//       trailId: this.props.id
//     }
//     this.props.addComment(newComment);
//     this.setState({ name: '', body: '', date: ''})
//   }
//   toggle = () => {
//     this.setState(prevState => {
// return {
// isToggled: !prevState.isToggled
// }
// })
//   }

  render() {
    console.log(this.props)
    return (
      <div>
        <p> {this.props.names} </p>
        <p> {this.props.city} </p>
        <p> {this.props.directions} </p>
{/*
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
              type="text"
              value={this.state.date}
              name="date"
              placeholder="date"
              onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      : null } */}
      </div>
    )
  }
}

export default connect(state => state)(Trail)
