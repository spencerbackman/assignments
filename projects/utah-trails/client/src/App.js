import React from 'React';
import {connect} from 'react-redux';
import Comments from './Comments.js';
import Trails from './Trails.js';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div>
        <Comments />
        <Trails />
      </div>
    )
  }
}

export default connect(state => state)(App);

