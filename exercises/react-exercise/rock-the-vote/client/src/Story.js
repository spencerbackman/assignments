import React from 'react'
import { deleteStory, editStory, addComment } from './redux'
import { connect } from 'react-redux'
import Comment from './Comment'

class Story extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            votes: 0,
            isToggled: false,
            isTogg: false,
            comments: {
                name:"",
                body: ''
            }

        }
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    handleUpVotes = e => {
        e.preventDefault();
        const upVote = {
            votes: this.state.votes += 1
        }
        this.props.editStory(this.props.id, upVote)
    }
    handleDownVotes = e => {
        e.preventDefault();
        const downVote = {
            votes: this.state.votes -= 1
        }
        this.props.editStory(this.props.id, downVote)
    }

    handleSubmit = e => {
        e.preventDefault()
        const newStory = {
            title: this.state.title,
            description: this.state.description
        }
        this.props.editStory( this.props.id, newStory)
        this.setState({ isTogg:false, isToggled:false, title: '', description: '', comments: { name:'', body:''}})
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
                <h1> { this.props.title} </h1>
                <p> { this.props.description } </p>
                <h3> { this.state.votes } </h3>

                <div> 
                <button onClick={ () => this.props.deleteStory(this.props.id) } >Delete</button>
                <button onClick={ this.handleUpVotes } >Up Vote</button>
                <button onClick={ this.handleDownVotes } >Down Vote</button>
                <button onClick={ this.toggle } >Edit</button>
                { this.state.isToggled
                ?<form onSubmit={ this.handleSubmit }>
                    <input 
                        type="text"
                        value={ this.state.title }
                        name="title"
                        placeholder="title"
                        onChange={ this.handleChange }/>
                    <input  
                        type="text"
                        value={ this.state.description }
                        name="description"
                        placeholder="description"
                        onChange={ this.handleChange }/>
                        <button>Submit</button>
                </form>
                : null
                    }
            </div>
            </div>
        )
    }
}

export default connect(null, { deleteStory, editStory, addComment })(Story)