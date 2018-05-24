import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from './redux';

class App extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
            name: '',
            phone: '',
            email: ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();

        this.props.addUser( this.state.inputs ) 
        this.setState({
            name: '',
            phone: '',
            email: ''
        })
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit = { this.handleSubmit } >
                <input type="text"
                value = { this.state.inputs.name }
                name = 'userInput' 
                onChange = { this.handleChange } />
                <input type="number"
                value = { this.state.inputs.phone }
                name = 'phone'
                onChange = { this.handleChange } />
                <input type="text"
                value = { this.state.inputs.email }
                name = 'email'
                onChange = { this.onChange } />
                <button>Submit</button> 
                </form>
            </div>
        )
    }
}

export default connect(state=>state, {addUser} )(App);