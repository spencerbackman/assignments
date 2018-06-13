import React from 'react'
import { connect } from 'react-redux'
import { addComment } from './redux'

class Comment extends React.Component {
    constructor() {
        super()
        this.state = {           
         comments: [{
            name: '',
            body: '',
            isToggled: false
        }],
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
        this.setState({ isToggled:false, name: '', body: ''})
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default connect(null, { addComment })(Comment)