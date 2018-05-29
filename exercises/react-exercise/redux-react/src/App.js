import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from './redux';
import Form from './Form';

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
        this.setState(prevState => {
            return{
                inputs: {
            ...prevState.inputs,
            [name]: value
                }
            }
        })
    }

    render() {
        return (
            <div>
                <form onSubmit = { this.handleSubmit } >
                <input type="text"
                value = { this.state.inputs.name }
                name = 'name' 
                placeholder = 'Name'
                onChange = { this.handleChange } />
                <input type="number"
                value = { this.state.inputs.phone }
                name = 'phone'
                placeholder = 'Phone Number'
                onChange = { this.handleChange } />
                <input type="text"
                value = { this.state.inputs.email }
                name = 'email'
                placeholder = 'Email'
                onChange = { this.handleChange } />
                <button>Submit</button> 
                </form>
                <Form />
            </div>
        )
    }
}

export default connect(state=>state, {addUser} )(App);