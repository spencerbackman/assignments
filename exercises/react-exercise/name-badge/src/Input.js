import React from 'react';
import main from './main.css';

class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            input: {
                fname: '',
                lname: '',
                email: '',
                birthPlace: '',
                phoneNum: '',
                favFood: '',
                about: ''
            },
            data: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) { 
        const {name, value} = e.target
        this.setState(prevState => {
            return {
                input: {
                    ...prevState.input,
                    [name]: value,
                }
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(e.target)
        this.setState(prevState => {
            return{
                data: [...prevState.data, this.state.input],
                input: ''
            }
        })
    }
    
    render() {
        const mapped = this.state.data.map(badge => {
            return (
                <div>
                    <li> { badge.fname } </li>
                    <li> { badge.lname } </li>
                    <li> { badge.email }</li>
                    <li> { badge.birthPlace } </li>
                    <li> { badge.phoneNum }</li>
                    <li> { badge.favFood } </li>
                    <li> { badge.about } </li>
                </div>
            )
        })

        return (
            <div>
            <form onSubmit={ this.handleSubmit }>
            <input type='text'
            onChange= { this.handleChange }
            name= 'fname'
            placeholder= 'first name'
            value={ this.state.input.fname } />
            <input type='text'
            onChange= { this.handleChange }
            name='lname'
            placeholder= 'last name'
            value= { this.state.input.lname } />
            <input type='text'
            onChange= { this.handleChange }
            name = 'email'
            placeholder= 'email'
            value= { this.state.input.email } />
            <input type="text"
            onChange= { this.handleChange } 
            name = 'birthPlace'
            placeholder = 'Place of Birth'
            value= { this.state.input.birthPlace } />
            <input type="number"
            onChange= { this.handleChange }
            name = 'phoneNum'
            placeholder = 'Phone'
            value= { this.state.input.phoneNum } />
            <input type="text"
            onChange = { this.handleChange }
            name = 'favFood'
            placeholder= 'Favorite Food'
            value= { this.state.input.favFood } />
            <input type='text'
            onChange= { this.handleChange } 
            name='about'
            placeholder= 'Tell us about yourself'
            value= { this.state.input.about } />
            <button>Submit</button>
            </form>
            <ul>
                { mapped }
            </ul>
            </div>
        )
    }
}

export default Input;