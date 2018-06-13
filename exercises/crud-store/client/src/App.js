import React from 'react'
import { connect } from 'react-redux'
import { getInventory, addInventory } from './redux'
import Crud from './Crud'

class App extends React.Component {
    constructor() {
        super();
        this.state={
            item: '',
            price: ''
        }
    }
    componentDidMount() {
        this.props.getInventory()
    }
    handleChange = (e) => {
        const {value, name} = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const newInventory = {
            item: this.state.item,
            price: this.state.price
        }
        this.props.addInventory(newInventory)
        this.setState({ item: '', price: '' })
    }
    render() {
        console.log(this.props.items)
        return (
            <div> 
                <form onSubmit={ this.handleSubmit }>
                    <input type="text"
                        value={ this.state.item }
                        name="item"
                        placeholder="item"
                        onChange={this.handleChange } />
                    <input type="number"
                        value={ this.state.price }
                        name="price"
                        placeholder="price"
                        onChange={ this.handleChange } />
                        <button>Submit</button>
                </form>
                { this.props.items.map(item => 
                    <Crud key={ item._id } id={ item._id } item={ item.item } price={ item.price } />
                )}
            </div>
    )}
}

export default connect(state => ({items: state}), { getInventory, addInventory }) (App);