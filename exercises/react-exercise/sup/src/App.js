import React, { Component } from 'react';
import NameForm from './NameForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';


class App extends Component {
    render() {
        return (
            <div>
                <NameForm />
                <FlavorForm />
                <Reservation />
            </div>
        )
}
}    

export default App;
