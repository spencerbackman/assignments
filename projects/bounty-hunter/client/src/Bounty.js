import React from 'react'
import { deleteBounty, editBounty } from './redux'
import { connect } from 'react-redux'

class Bounty extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            weapon: '',
            payout: '',
            isToggled: false
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
        const newBounty = {
            name: this.state.name,
            weapon: this.state.weapon,
            payout: this.state.payout
        }
        this.props.editBounty( this.props.id, newBounty)
        this.setState({ isToggled:false, name: '', weapon: '', payout: ''})
    }
    toggle = () => {
        this.setState(prevState => {
            return {
                isToggled: !prevState.isToggled
            }
        })
    }
    render() {
        return (
            <div>
                <h1> { this.props.name } </h1>
                <h3> { this.props.weapon } </h3>
                <h3> { this.props.payout } </h3>
                <button onClick={ () => this.props.deleteBounty(this.props.id) }>Delete</button>
                <button onClick={ this.toggle }>Edit</button>
                { this.state.inToggled 
                    ? <form onSubmit= {this.handleSubmit}>
                        <input type="text"
                            value={this.state.name} 
                            name="name"
                            placeholder="name"
                            onChange= { this.handleChange } />
                        <input type="text"
                            value={ this.state.weapon }
                            name="weapon"
                            placeholder="weapon"
                            onChange={ this.handleChange } />
                        <input type="number"
                            value={ this.state.payout }
                            name="payout"
                            placeholder="payout"
                            onChange={ this.handleChange } />
                        <button>Submit</button>
                    </form>
                    : null
                    }
            </div>
        )
    }
}

export default connect(null, )(Bounty)
//{ deleteBounty, editBounty }