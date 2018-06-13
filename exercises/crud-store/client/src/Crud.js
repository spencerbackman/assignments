import React from 'react'
import { connect } from 'react-redux'
import { deleteInventory, editInventory } from './redux'

class Crud extends React.Component {
    constructor() {
        super()
        this.state = {
            item: '',
            price: '',
            isToggled: false
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState=({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const newInventory = {
            item: this.state.item,
            price: this.state.price
        }
        this.props.editInventory( this.props.id, newInventory)
        this.setState({ isToggled:false, item: '', price: ''})
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
               <h1> { this.props.item } </h1>
               <h3> { this.props.price } </h3>
               <button onClick={ () => this.props.deleteInventory(this.props.id)} >Delete</button>
               <button onClick={ this.toggle }>Edit</button>
               { this.state.isToggled
               ?<form onSubmit={ this.handleSubmit }>
                    <input 
                        type="text"
                        value={ this.state.item }
                        name="item"
                        placeholder="item"
                        onChange= { this.handleChange } />
                    <input 
                        type="text"
                        value={ this.state.price }
                        name="price"
                        placeholder="price"
                        onChange= { this.handleChange } />
                        <button>Submit</button>
                </form>
                : null
               }
            </div>
        )
    }
}

export default connect(null, { deleteInventory, editInventory })(Crud)