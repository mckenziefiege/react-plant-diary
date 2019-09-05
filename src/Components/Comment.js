import React, { Component } from 'react'
import GarbageIcon from './GarbageIcon.js'

class Comment extends Component {

  render() {
    const {comment} = this.props
    return (
      <div className="comment">
        <div>
          <p className="comment__content">{comment.content}</p>
          <p className="comment__date">{comment.readable_time}</p>
        </div>
        <GarbageIcon deleteItem={this.props.deleteComment} id={comment.id}/>
      </div>
    )
  }
}

export default Comment;
