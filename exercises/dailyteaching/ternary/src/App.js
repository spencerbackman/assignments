import React from 'react';

const App = () => {
    let phrase 
    switch(props.phrase) {
        case 'greeting':
            return phrase = <h1> Hello </h1>
        case 'question':
            return phrase = <h1> What's Up? </h1>
        case 'farewell':
            return phrase = <h1> Bye Bye </h1>
        default: 
            return null
    }
    return(
        <div>
            {phrase}
        </div>
    )
}

export default App;