import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './Posts.js';
import { Container, Grid } from '@mui/material';

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
    <Container>
      <Grid container>
        {posts.map(post => {
          return (
            <Grid xs={12} md={6} lg={4}>
              <Posts 
                author={post.author}
                title={post.title}
                text={post.text}
              />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default Home;