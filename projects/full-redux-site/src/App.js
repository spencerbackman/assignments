import React from 'react';
import Second from './Second';
import Third from './Third';
import Navbar from './Navbar';
import Footer from './Footer';
import { connect } from 'react-redux'
import { getData } from './redux'
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
    componentDidMount() {
        this.props.getData()
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <Navbar />
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/second' component={Second}/>
                <Route path='/third' component={Third}/>
            </Switch>
                <h1>Name: { this.props.data.name }</h1>
                <h3>Aliase: { this.props.data.aliases }</h3>
                <h3>Born: { this.props.data.born }</h3>
                <h3>Gender: { this.props.data.gender }</h3>
                <h3>Actor: { this.props.data.playedBy }</h3>
                <h3>Titles: { this.props.data.titles }</h3>
            </div>
        )
    }
}

export default connect(state => state, { getData })(App)