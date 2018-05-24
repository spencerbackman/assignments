import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();

        this.style = {
          display: 'flex',
          flexWrap: 'wrap',
          padding: '0 4px'
        }
        
        this.style2 = {
            flex: '25%',
            maxWidth: '25%',
            padding: '0 4px'
        }
        
        this.style3 = {
            marginTop: '8px',
            verticalAlign: 'middle',
            width: '250px'
        }

        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get('http://api.vschool.io:6543/hitlist.json').then(response => {
            this.setState({data: response.data})
        })
    }
    render(){
        const myData = this.state.data.map(todo => {
            return (
            <div style={this.style}>
                <h1 style={this.style2} > {todo.name} </h1>
                <h3>
                    <img style={this.style3} src={todo.image} alt=''/> 
                 </h3>
            </div>
            )
        })
        return (
            <div>
                {myData}
            </div>
        )
    }
}

export default App;


