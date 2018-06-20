import React from 'react';
import { connect } from 'react-redux';
import { getTrails } from './redux';
import Trails from './Trails'


class App extends React.Component {

  componentDidMount() {
    this.props.getTrails();
    // this.props.getComments();
  }
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.places.map(place =>
        <Trails key={place.unique_id} id={place.unique_id}
        name={place.name} city={place.city} directions={place.directions}/>)}

      </div>
    )
  }
}

export default connect(state => state,{ getTrails})(App);
{/* {this.props.map(comment =>
  <Comment key={comment._id} id={comment._id}
  name={comment.name} body={comment.body}
  date={comment.date}/>)} */}
  {/* <h3> {this.mapped}</h3> */}
  {/* {this.props.places.map(place =>
      <Trail key={place.unique_id} id={place.unique_id}
      name={place.name} city={place.city} directions={place.directions} /> )} */}
