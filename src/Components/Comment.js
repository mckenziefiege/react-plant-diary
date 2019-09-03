import React, { Component } from 'react'
import GarbageIcon from './GarbageIcon.js'

class Comment extends Component {

  render() {
    const {comment} = this.props
    return (
      <div className="comment">
        <p>{comment.content}</p>
        <p>{comment.created_at}</p>
        <GarbageIcon deleteComment={this.props.deleteComment} id={comment.id}/>
      </div>
    )
  }
}

export default Comment;
