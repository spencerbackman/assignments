import React from 'react';
import main from './main.css'
import Nav from './Nav'

const App = () => {
    return (       
       <header>
            <h1>Clean Blog</h1>
            <h3>A blog theme by start bootstrap</h3>
            <div className="blog">
                <Nav />
            </div>
        </header>
    )
}

export default App;

