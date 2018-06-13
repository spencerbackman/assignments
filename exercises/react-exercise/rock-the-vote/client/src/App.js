import React from 'react'
import { connect } from 'react-redux'
import { getStory, addStory } from './redux'
import Story from './Story'
import Comment from './Comment'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            comments: [{
                name: '',
                body: ''
            }]
        }
    }
    componentDidMount() {
        this.props.getStory()
    }
    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const newStory = {
            title: this.state.title,
            description: this.state.description
        }
        this.props.addStory(newStory)
        this.setState({ title: '', description: '', comments:[{ name: '', body: ''}]})
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <input 
                        type="text"
                        value={ this.state.title }
                        name="title"
                        placeholder="title"
                        onChange={ this.handleChange } />
                    <input 
                        type="text"
                        value={ this.state.description }
                        name="description"
                        placeholder="description"
                        onChange={ this.handleChange } />
                        <button>Submit</button>
                        </form>
                {this.props.story.map(stories => 
                <div>
                <Story key={stories._id} id={stories._id} 
                title={ stories.title } description={ stories.description } 
                name={ stories.comments.name } body={ stories.comments.body } />
                <Comment key={stories._id} id={stories._id}
                name={ stories.comments.name } body = { stories.comments.body } />
                </div> )}
            </div>
        )
    }
}

export default connect(state => ({story: state}), { getStory, addStory}) (App)