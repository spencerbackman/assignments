import React from 'react'
import { connect } from 'react-redux'
import { getBounties } from './redux'
import Bounty from './Bounty'
//, addBounty
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      weapon: '',
      payout: ''
    }
  }
  componentDidMount() {
    this.props.getBounties()
  }
  handleChange = (e) => {
    const {value, name} = e.target
    this.setState({
      [name]: value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const newBounty = {
      name: this.state.name,
      weapon: this.state.weapon,
      payout: this.state.payout
    }
    this.props.addBounty(newBounty)
    this.setState({ name: '', weapon: '', payout: ''})
  }
  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input 
            type="text"
            value={this.state.name}
            name="name"
            placeholder="name"
            onChange={ this.handleChange } />
          <input 
            type="text"
            value={ this.state.weapon }
            name="weapon"
            placeholder="weapon"
            onChange={ this.handleChange } />
          <input 
            type="number"
            value={ this.state.payout }
            name="payout"
            placeholder="payout"
            onChange={ this.handleChange } />
          </form>
        </div>
    )
  }
}

export default connect(state => ({bounty: state}), ) (App);
//{ getBounties, addBounty}