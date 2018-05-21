import React, { Component } from 'react';
import data from './super.json';

class App extends Component {
  const mapping = data.supers.map(()=> {
    return (
      <h1></h1>
    )
  })
  constructor() {
    super();
    this.state = {
      color: 'purple',
      fontSize: '40px',
      fontFamily: 'monospace',
      height: '200px',
      width: '500px',
      backgroundColor: 'salmon'
    }
    this.changeColor = this.changeColor.bind(this);
    this.changeWidth = this.changeWidth.bind(this);
  }

    changeColor(backgroundColor) {
      this.setState({
        backgroundColor
      })
    }
    changeWidth(width) {
      this.setState({
        width
      })
    }

  render() {
    return (
      <div style={this.state}
      onMouseEnter={()=>this.changeColor('red')} 
      onMouseOut={()=>this.changeColor('blue')} 
      onClick={()=>this.changeWidth('400px')}
      onDoubleClick={()=> this.changeWidth('200px')} >
        Hello my names spencer
      </div>
    );
  }
}

export default App;
