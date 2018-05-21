import React, { Component } from 'react';

class Nameform extends Component {
    constructor(){
        super();
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event){
        this.setState({
            input: event.target.value;
        })
    };

    
    
    handleSubmit(event) {
        event.preventDefault();
        console.log(event.target)
        alert(`${this.state.input}, nice to meet you`)
        this.setState({
            input: ''
        })
    }
    
    render() {
        return(
            <form onSubmit={ this.handleSubmit }>              
                Name:
                    <input 
                    type="text"
                    onChange={ this.handleChange }
                    name= "input"
                    value={ this.state.value }/>
                    
                <button>Submit</button>
            </form>
        )
    }
}

export default Nameform;


// import React, { Component } from 'react';

// class Nameform extends Component {
//     constructor() {
//         super();
//         this.state = {
//             input: ''
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({
//             input: event.target.value
//         })
//     }

//     handleSubmit(event) {
//         console.log(event.state)
//         alert(`Your name is ${this.state.input}`)
//         this.setStat({
//             input: ''
//         })
//     }

//     render() {
//         return (  
//             <form onSubmit={ this.handleSubmit }>
//                 <label>
//                     Name:
//                     <input 
//                     type="text"
//                     onChange={ this.handleChange } 
//                     name="input" 
//                     value={ this.state.value } />
//                 </label>
//                 <button>Submit</button>
//             </form>       
//         )
//     }
// }

// export default Nameform;