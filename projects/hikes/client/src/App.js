import React from 'react';
import { connect } from 'react-redux';
import { getComments, getTrails } from './redux';
import Trail from './Trail'
import Comment from './Comment'

class App extends React.Component{
// constructor() {
//   super();
//   this.state= {
//     name:'',
//     body: '',
//     date: '',
//     trailId: ''
//   }
// }
  componentDidMount() {
    this.props.getComments();
    this.props.getTrails();
  }
    i = (props) =>{
      this.props
    }
// mapped = () => {this.props.places.map(place =>
//     <Trail key={place.unique_id} id={place.unique_id}
//     name={place.name} city={place.city} directions={place.directions} /> )}
  render() {
    console.log(this.props)
const myTrails = Array.isArray(this.props.places) ? this.props.places.map(place =>
<Trail key={place.unique_id} id={place.unique_id}
name={place.name} city={place.city} directions={place.directions} />  ) : [];
    return(
      <div>

<Comment />
        <h1> Hiking SLC Utah :) </h1>
          <p>{myTrails}</p>
          <p></p>

      </div>
    )}
}


export default connect(state => state, { getComments, getTrails })(App);
