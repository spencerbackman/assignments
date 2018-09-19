import React from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from './Navbar';
import First from './First';
import Fifth from './Fifth';


const App = () => {
    return (
        <div>
            <Navbar />
            <div className="home">
                <h1 className="main">Restful API site</h1>
                <br/>
                <br/>
            </div>
        <Switch>
            <Route exact path="/" />
            <Route path="/first" component={First}/>
            <Route path="/fifth" component={Fifth} />
        </Switch>
        </div>
    )
}

export default App;
