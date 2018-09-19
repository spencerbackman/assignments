import React from 'react'
import { getTrails } from './redux/trails.js';
import { connect } from 'react-redux';
import Traildisplay from './Traildisplay';

class Trails extends React.Component {
    constructor(){
        super();
    }
    componentDidMount() {
        this.props.getTrails();
      }
    render() {
        // const trails = Array.isArray(this.props.places) ? this.props.places.map(place =>
        //     <Traildisplay key={place.unique_id} id={place.unique_id}
        //         name={place.name} city={place.city} directions={place.directions} />
        //         ) : [];
        return(
            <div>
                {this.props.places.map(place => {
                    <Traildisplay key={place.unique_id} id={place.unique_id}
                name={place.name} city={place.city} directions={place.directions} />
                })}
            </div>
        )
    }
}

export default connect(state => state, {getTrails})(Trails)