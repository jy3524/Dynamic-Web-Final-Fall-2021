import React from 'react';
import { Card, CardHeader, CardContent, Container, Typography, IconButton } from '@mui/material';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';

const Posts = ({ author, title, text }) => {
  const cardStyle={padding:20, margin:"30px auto"};

  return (
    <Container>
      <Card elevation={5} style={cardStyle}>
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