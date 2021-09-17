import React from 'react';

const CommentDetail = () => {
    return (
    <div className="comment">
        <a href="/" className="Avatar">
          <img alt="avatar" src={faker.image.avatar()} />
          <img alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
    </div>
    );
}

export default CommentDetail;