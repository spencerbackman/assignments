import React from 'react';
import Welcome from './Welcome'
import Form from './Form'


const App = () => {
    return(
        <div>
            <Welcome title="yo"
            subtitle='whats good' 
            info="everythings good"/>
              <Welcome title="knock knock"
            subtitle='whos there' 
            info="chicken butt"/>
              <Welcome title="why'd the chicken cross the road"
            subtitle='why?' 
            info="to get to the other side"/>
              <Welcome title="moo"
            subtitle='cows' 
            info="i am a cow"/>
              <Welcome title="brown cow"
            subtitle='moo' 
            info="i produce chocolate milk"/>
              <Welcome title="beers"
            subtitle='yes' 
            info="4 please"/>
              <Welcome title="dab"
            subtitle='glass rig' 
            info="I'll take 100 hits"/>
              <Welcome title="got milk?"
            subtitle='moo' 
            info="im a brown cow ;)"/>
            <Form />
            <Form />
            <Form />
            <Form />
            <Form />
            <Form />
        </div>

    );
}

export default App;