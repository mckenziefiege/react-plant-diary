import React, { Component } from 'react'

class Comment extends Component {

  render() {
    const {comment} = this.props
    return (
      <div className="comment">
        <p>{comment.content}</p>
        <p>{comment.created_at}</p>
      </div>
    )
  }
}

export default Comment;
