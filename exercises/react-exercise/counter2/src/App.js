import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
    constructor() {
    super();
    
    this.state = {
        clickCounter: 0
    }

    this.addCount = this.addCount.bind(this);
    this.subCount = this.subCount.bind(this);
    }

    addCount = () => {
        this.setState(prevState => {
            return {
                clickCounter: prevState.clickCounter + 1
            }
        })
    }

    subCount = () => {
        this.setState(prevState => {
            return {
                clickCounter: prevState.clickCounter -1
            }
        })
    }
   

    render() {
    return (
        <div>
            <Counter count={this.state.clickCounter} add={this.addCount} sub={this.subCount}/>
        </div>
    );
}
}

export default App;