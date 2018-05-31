import React from 'react';
import { Switch, Route } from "react-router-dom";
import Third from './Third';
import Second from './Second';
import Navbar from './Navbar';
import First from './First'

const App = () => {
    return (
        <div>
            <Navbar />
        <Switch>
            <Route exact path="/first" component={First}/>
            <Route path="/second" component={Second}/>
            <Route path="/third" component={Third} />
        </Switch>
        </div>
    )
}

export default App;