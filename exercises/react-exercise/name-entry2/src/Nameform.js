import React from 'react';

class Nameform extends React.Component {
    constructor() {
        super();

    this.state = {
        input: '',
        data: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const mappedData = this.state.data.map(item => {
            return (
                <li> { item } </li>
            )
        })

        return (
            <div>
                <h1>{ this.state.input } </h1>
                <form onSubmit={ this.handleSubmit }>
                Name:
                    <input 
                    type="text"
                    onChange={ this.handleChange }
                    name= "input"
                    value={ this.state.input }/>
                    <button>Submit</button>
                </form>
                <ul>
                    { mappedData }
                </ul>
            </div>
        )
    }
}

export default Nameform;




