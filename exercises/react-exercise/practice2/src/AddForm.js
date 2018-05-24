import React from 'react';
import { connect } from 'react-redux';
import { addPidgeon } from './redux';

class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                nickname: '',
                imgUrl: ''
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        const { name, value } = e.target
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs, 
                    [name]: value
                }
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addPidgeon(this.state.inputs)
    }
    render() {
        const {inputs: {nickname, imgUrl}} = this.state;
        console.log(this.state.input)
        return (
            <form onSubmit= {this.handleSubmit}>
                <input onChange= { this.handleChange } name="imgUrl" type="text" placeholder= "Image Url" />
                <input onChange= { this.handleChange } name="nickname" type="text" placeholder= "Enter Nickname" />
                <button>Submit</button>
            </form>
        )
    }
}

export default connect(null, { addPidgeon })(AddForm);