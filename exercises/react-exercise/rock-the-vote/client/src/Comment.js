import React from 'react'
import { connect } from 'react-redux'
import { addComment } from './redux'

class Comment extends React.Component {

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const newStory = {
            name: this.state.name,
            body: this.state.body
        }
        this.props.addComment( this.props.id, newStory)
        this.setState({ isToggled:false, name: '', body: ''})
    }
    toggle = () => {
        this.setState(prevState => {
            return {
                isToggled: !prevState.isToggled
            }
        })
    }
    render(){
        console.log(this.props)
        return(
        <div>
        <div>          
            <p> { this.props.name } </p>
            <p> { this.props.body } </p>
        </div>
        <button onClick={this.toggle }>Comment</button>
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
                        name="comment"
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

export default connect(null, { addComment })(Comment)