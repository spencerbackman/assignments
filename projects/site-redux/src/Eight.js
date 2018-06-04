import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getWeather } from './redux';

class Eight extends React.Component {
  componentDidMount() {
    this.props.getWeather()
  }
  render() {
    return (
      <div>
      <h1> All about the sun today </h1>
        <h3>Sunrise: { this.props.weatherData.results.sunrise } </h3>
        <h3>Sunset: { this.props.weatherData.results.sunset } </h3>
        <h3>Solar Noon: { this.props.weatherData.results.solar_noon } </h3>
        <h3>Day Length: { this.props.weatherData.results.day_length } </h3>
      </div>
    )
  }
}

export default withRouter(connect(state => state, { getWeather })(Eight))
