import React from 'react';
import { Card, CardHeader, CardContent, Container, Typography, IconButton, Avatar } from '@mui/material';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';

const Posts = ({ author, title, text }) => {
  const cardStyle={padding:20, margin:"30px auto"};

  return (
    <Container>
      <Card elevation={5} style={cardStyle}>
        <Avatar sx={{height:"50px", width:"50px"}} alt="" src="/broken-img.jpg"/>
        <CardHeader 
          action={
            <IconButton><DeleteOutlined/></IconButton>
          }
          title={title} 
          subheader={author} 
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Posts;