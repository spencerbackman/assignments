import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.rick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    rick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
    return (
        <div>
            <h1>Hello, World! </h1>
            <h2>It is { this.state.date.toLocaleTimeString()} </h2>
        </div>
    )
}
}

function Tick() {
    return (
        <Clock />
    )
}
setInterval(Tick, 1000);

export default Tick;