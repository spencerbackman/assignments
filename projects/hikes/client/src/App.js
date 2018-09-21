import React from 'react';
import { connect } from 'react-redux';
import { getComments } from './redux/commentredux';
import { getTrails } from './redux/trailredux';
import Trail from './Trail'
import Comment from './Comment'

class App extends React.Component{
  componentDidMount() {
    this.props.getComments();
    this.props.getTrails();
  }
  render() {
    const myTrails = Array.isArray(this.props.trails.places) ? this.props.trails.places.map(place =>
    <Trail key={place.unique_id} id={place.unique_id}
    names={place.name} city={place.city} directions={place.directions} activities={place.activities} /> ) : [];

    const myComments =Array.isArray(this.props.comments) ? this.props.comments.map(comment =>
    <Comment name={comment.comments.map(com => com.name)} body={comment.comments.map(com => com.body)}/>) : [];

    return (
      <div>
        <p>{myTrails} {myComments}</p>
      </div>
    )
  }
}


export default connect(state => state, { getComments, getTrails })(App);
