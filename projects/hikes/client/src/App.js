import React from 'react';
import { connect } from 'react-redux';
import { getComments, getTrails } from './redux';
import Trail from './Trail'
// import Comment from './Comment'

class App extends React.Component{
constructor() {
  super();
  this.state= {
    comments: [{
      name: '',
      body: ''
    }]
  }
}
  componentDidMount() {
    this.props.getComments();
    this.props.getTrails();
  }
    

  render() {
    // const comments = Array.isArray(this.props.comments) ? this.props.comments.map(comment =>
    // <Trail id={comment.id} name={comment.name} body={comment.body} />) : [];

    const myTrails = Array.isArray(this.props.places) ? this.props.places.map(place =>
    <Trail key={place.unique_id} id={place.unique_id}
    names={place.name} city={place.city} directions={place.directions} activities={place.activities} /> ) : [];

    return(
      <div>
        <h1> Hiking SLC Utah </h1>
          <p>{myTrails}</p>

      </div>
    )}
}


export default connect(state => state, { getComments, getTrails })(App);
