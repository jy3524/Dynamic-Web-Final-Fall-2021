import React from 'react';
import { Card, CardHeader, CardContent, Container, Typography, IconButton, Avatar, CardMedia, CardActions } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';

const Posts = ({ author, title, text }) => {
  const cardStyle={margin:"30px auto"};

  return (
    <Container>
      <Card elevation={5} style={cardStyle} sx={{maxWidth: 345}}>
        <CardHeader
          avatar={
            <Avatar sx={{height:"50px", width:"50px", bgcolor:red[500]}} 
            alt="" src="/broken-img.jpg"/>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title} 
          subheader={author} 
        />
        <CardMedia component="img" height="194" image="https://media.timeout.com/images/103939099/750/422/image.jpg" alt="placeholderimg" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="likes">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  )
}

export default Posts;