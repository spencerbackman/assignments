import React from 'react';
import { Switch, Route } from "react-router-dom";
import Third from './Third';
import Second from './Second';
import Navbar from './Navbar';
import First from './First';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Sixth from './Sixth';
import Seven from './Seven';
import Eight from './Eight';


const App = () => {
    return (
        <div>
            <Navbar />
        <Switch>
            <Route exact path="/first" component={First}/>
            <Route path="/second" component={Second}/>
            <Route path="/fourth" component={Fourth}/>
            <Route path="/third" component={Third} />
            <Route path="/fifth" component={Fifth} />
            <Route path="/sixth" component={Sixth} />
            <Route path="/seven" component={Seven} />
            <Route path="/eight" component={Eight} />
        </Switch>
        </div>
    )
}

export default App;
