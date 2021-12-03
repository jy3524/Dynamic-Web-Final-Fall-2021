import React from 'react';

const Posts = ({ author, title, text }) => {
  return (
    <div className="posts">
      <p className="author">Name: {author}</p>
      <p className="title">Title: {title}</p>
      <p className="text">Post: {text}</p>
    </div>
  )
}

export default Posts;