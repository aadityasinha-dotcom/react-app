import React from 'react';

const CommentDetail = (props) => {
    return (
    <div className="comment">
        <a href="/" className="Avatar">
          <img alt="avatar" src={faker.image.avatar()} />
          <img alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">{props.timeAgo}</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
    </div>
    );
}

export default CommentDetail;