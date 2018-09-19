import React from 'react'
import { connect } from 'react-redux'
import { getComments } from './redux/comments.js'
import Commentdisplay from './Commentdisplay'

class Comments extends React.Component {
    constructor() {
        super();
    }
    componentDidMount(){
        this.props.getComments();
      }
    render() {
        return (
            <div> 
                {this.props.comments.map(comment => 
                <Commentdisplay  name = {comment.name} body ={comment.body} />)}
            </div>
        )
    }
}

export default connect(state => {comments: state}, {getComments})(Comments)