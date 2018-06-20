import React from 'react'
// import { connect } from 'react-redux'

//
class Comment extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       comment: {
//         name: '',
//         body: ''
//       },
//       isToggled:false
//     }
//     this.handleChange = this.handleChange.bind('this')
//     this.handleSubmit = this.handleSubmit.bind('this')
//   }
//   handleChange = (e) => {
//     const { name, value } = e.target
//     this.setState({
//       [name]: value
//     })
//   }
//   handleSubmit = (e) => {
//     e.preventDefault()
//     const newComment = {
//       name: this.state.name,
//       body: this.state.body
//     }
//     this.props.addComment(newComment, this.props.id)
//     this.setState({ isToggled:false, comments: {name: '', body: ''}})
//   }
//   toggle = () => {
//     this.setState(prevState => {
//       return {
//         isToggled: !prevState.isToggled
//       }
//     })
//   }
  render() {
    return (
      <div>
{/* //         <p> { this.props.name } </p>
//         <p> { this.props.body } </p>
//         <button onClick={ this.toggle }>Comment</button>
//         {this.state.isToggled */}
{/* //         ?
//            <form onSubmit={ this.handleSubmit }>
//             <input
//               type="text"
//               value={ this.state.name }
//               name="name"
//               placeholder="name"
//               onChange={ this.handleChange } />
//             <input
//               type="text"
//               value={ this.state.body }
//               name="body"
//               placeholder="body"
//               onChange={ this.handleChange } />
//             <button onSubmit={ this.handleSubmit }>Submit</button>
//           </form>
//           :null
//           } */}
        </div>
    )
  }
}

export default Comment
