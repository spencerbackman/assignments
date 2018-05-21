import React, { Component } from 'react';

class NameForm extends Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit(event) {
        console.log(event.state)
        alert(`Your name is ${this.state.input}`)
        this.setStat({
            input: ''
        })
    }

    render() {
        return (
        <div>
            <h1 className="head">{this.handleChange} </h1>
            <form onSubmit={ this.handleSubmit }>
                <label>
                    Name:
                    <input 
                    type="text"
                    onChange={ this.handleChange } 
                    name="input" 
                    value={ this.state.value } />
                </label>
                <button>Submit</button>
            </form>
        </div>
        )
    }
}

export default NameForm;