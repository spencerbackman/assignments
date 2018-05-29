import React from 'react';

class Input extends React.Component {
    constructor() {
        super();
        
        this.state = {
            inputs: {
                fname: '',
                lname: '',
                email: '',
                birthplace: '',
                phone: '',
                favfood: '',
                about: ''
            },
            data: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmitbind(this)
    }
    handleChange(e) {
        e.preventDefault();
        this.setState(PrevState => {
        return {
            input: {
                ...PrevState.input,
                [name]: value
            }
        }
    })
}
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type='text'
                    onChange= { this.handleChange }
                    name='fname'
                    placeholder='First Name'
                    value={ this.state.inputs.fname } />
                    <input 
                    type='text'
                    onChange= { this.handleChange } 
                    name='lname'
                    placeholder='Last Name'
                    value={ this.state.inputs.lname } />
                    <input 
                    type='text'
                    onChange={ this.handleChange }
                    name='email'
                    placeholder= 'Email'
                    value= { this.state.inputs.email } />
                    <input 
                    type='text'
                    name='birthplace'
                    placeholder='Birth Place'
                    value= { this.state.inputs.birthplace } />
                    <input type="number"
                    name='phone'
                    placeholder='Phone Number'
                    value= { this.state.inputs.phone } />
                    <input type="text"
                    name='favfood'
                    placeholder='Favorite Food'
                    value= { this.state.inputs.favfood } />
                    <input type="text"
                    name='about'
                    placeholder='About'
                    value= { this.state.inputs.about } />
                    <button />
                </form>
            </div>
        )
    }
}