import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './Posts.js';

function Home() {
  const [posts, setPosts] = useState([]);

  const URL = `https://secret-everglades-59048.herokuapp.com`;

  useEffect(() => {
    axios
    .get(URL)
    .then((response) => {
      console.log(response.data)
      setPosts(response.data)
    })
    .catch(function (error) {
      console.log(error)
    });
  }, [URL])

  return (
    <div>
      {posts.map(post => {
        return (
          <Posts 
            author={post.author}
            title={post.title}
            text={post.text}
          />
        )
      })}
    </div>
  )
}

export default Home;