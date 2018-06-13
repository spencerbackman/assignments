import React from 'react'
import { deleteStory, editStory } from './redux'
import { connect } from 'react-redux'

class Story extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            isToggled: false,

        }
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newStory = {
            title: this.state.title,
            description: this.state.description
        }
        this.props.editStory( this.props.id, newStory)
        this.setState({ isToggled2:false, isToggled:false, title: '', description: '', comments: [{ name:'', body:''}]})
    }
    toggle = () => {
        this.setState(prevState => {
            return {
                isToggled: !prevState.isToggled
            }
        })
    }
    toggle2 = () => {
        this.setState(prevState => {
            return {
                isToggled2: !prevState.isToggled2
            }
        })
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1> { this.props.title} </h1>
                <p> { this.props.description } </p>
                <button onClick={ () => this.props.deleteStory(this.props.id) } >Delete</button>
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
                <button onClick={ this.toggle2 } >comment</button>
                { this.state.isToggled2 
                ? <form onSubmit= { this.handleSubmit }>
                    <input 
                        type="text"
                        value={ this.state.comments.name }
                        name="name"
                        placeholder="name"
                        onChange={ this.handleChange } />
                    <input 
                        type="text"
                        value={ this.state.comments.body } 
                        name="comment"
                        placeholder="comment"
                        onChange={ this.handleChange } />
                        <button>Submit</button>
                </form>
                : null
                }
            </div>
        )
    }

}

export default connect(null, { deleteStory, editStory })(Story)