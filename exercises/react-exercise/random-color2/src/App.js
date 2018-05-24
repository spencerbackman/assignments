import React, { Component } from 'react';
import axios from 'axios';

export default class componentName extends Component {
constructor() {
    super();
    this.state = {
        color: ''
    }
}
componentDidMount() {
    axios.get("http://www.colr.org/json/color/random").then(response => {
        this.setState({color: response.data.new_color})
    })
}
    render() {
        this.style = {
            width: '200px',
            height: '200px',
            backgroundColor: `#${this.state.color}`
        }
        return (
            <div style={this.style}>
                Hello
            </div>
        ) 
    }
}
