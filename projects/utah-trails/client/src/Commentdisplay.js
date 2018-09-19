import React from 'React';
import { connect } from 'react-redux';
import {addComment} from './redux/comments';

class Commentdisplay extends React.Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default connect(state => state, {addComment})(Commentdisplay);