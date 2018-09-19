import React from 'react';
import { connect } from 'react-redux';
import { getTrails, getComments } from './redux';
import Trails from './Trails';
// import comment from './Comments';

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     name: '',
  //     body: ''
  //   }
  // }

  componentDidMount() {
    this.props.getTrails();
    this.props.getComments();
  }
  render() {
    const trails = Array.isArray(this.props.places) ? this.props.places.map(place =>
    <Trails key={place.unique_id} id={place.unique_id}
        name={place.name} city={place.city} directions={place.directions} />) : [];
        console.log(this.props)
    return(
      <div>
        <p>{trails}</p>
      </div>
    )
  }
}

export default connect(state => state, { getTrails, getComments})(App);
{/* {this.props.map(comment =>
  <Comment key={comment._id} id={comment._id}
  name={comment.name} body={comment.body}
  date={comment.date}/>)} */}
  {/* <h3> {this.mapped}</h3> */}
  {/* {this.props.places.map(place =>
      <Trail key={place.unique_id} id={place.unique_id}
      name={place.name} city={place.city} directions={place.directions} /> )} */}
