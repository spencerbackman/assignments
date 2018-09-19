import React from 'react'


class Comment extends React.Component {
  render(){
    return (
      <div>
        <p>{this.props.description}</p>
        <a href={this.props.url}>{this.props.url}</a>
      </div>
    )
  }
}

export default(Comment) 
