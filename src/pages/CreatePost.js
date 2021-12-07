import React, { useState } from 'react';
import { initializeApp } from '@firebase/app';
import { getFirestore, collection, addDoc } from '@firebase/firestore';
import firebaseConfig from '../components/FirebaseConfig';
import { Grid, Paper, Button, TextField }from '@mui/material';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function CreatePost() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault(); 
    await addDoc(collection(db, "blogposts"), {
      author,
      text,
      title,
    });
    setTitle("")
    setText("")
    setAuthor("")
  }

  const paperStyle={padding:20, height:'60vh', width: '70%', margin:"30px auto"};

  return (
    <Grid align="center">
      <Paper elevation={10} style={paperStyle}>
        <form onSubmit={handleSubmit}>
          <h1>Post</h1>
          <div>
            <TextField sx={{ m: 1 }} style={{width: "80%"}} id="outlined-name" label="Title" placeholder="Type here" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <TextField sx={{ m: 1 }} style={{width: "80%"}} id="outlined-name" label="Text" placeholder="Type here" value={text} onChange={(e) => setText(e.target.value)}/>
          </div>
          <div>
            <TextField sx={{ m: 1 }} style={{width: "80%"}} id="outlined-name" label="Name" placeholder="Name" value={author} onChange={(e) => setAuthor(e.target.value)}/>
          </div>
          <Button sx={{ m: 3 }} style={{width: "80%"}} type="submit" color="primary" variant="contained" onClick={handleSubmit}>Submit Post</Button>
        </form>
      </Paper>
    </Grid>
  )
}

export default CreatePost;
