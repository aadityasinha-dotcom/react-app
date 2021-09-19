import React from 'react';

const CommentDetail = ( props ) => {
    return (
    <div className="ui conatiner comments">
      <div className="comment">
        <a href="/" className="Avatar">
          <img alt="avatar" src={props.avatar} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">{props.timeAgo}</span>
          </div>
          <div className="text">{props.blog}</div>
        </div>
      </div>
    </div>
    );
}

export default CommentDetail;