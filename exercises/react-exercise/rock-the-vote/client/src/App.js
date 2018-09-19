import React from 'react'
import { connect } from 'react-redux'
import { getStory, addStory } from './redux'
import Story from './Story'


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            votes: 0,
            comments: {
                name: '',
                body: ''
            }
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
        this.setState({ title: '', description: '', comments:{ name: '', body: ''}})
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.story.map(stories => 
                <Story key={stories._id} id={stories._id} 
                title={ stories.title } description={ stories.description }
                comments={ stories.comments} votes={ stories.votes }/>)}
            </div>
        )
    }
}

export default connect(state => ({story: state}), { getStory, addStory}) (App)