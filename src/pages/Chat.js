import React, { useEffect, useState } from 'react';
import { initializeApp } from '@firebase/app';
import { getFirestore, addDoc, collection, query, orderBy, onSnapshot, Timestamp } from '@firebase/firestore';
import firebaseConfig from '../components/FirebaseConfig';
import { Avatar, Button, Grid, List, Paper, TextField }from '@mui/material';
import { red } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import { Box } from '@mui/system';
import Moment from 'react-moment';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Chat() {
  const [text, setText] = useState("");
  const [chats, setChat] = useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault(); 
    await addDoc(collection(db, "chat"), {
      text,
      createdAt: Timestamp.fromDate(new Date()),
    });
    setText("")
    window.location.reload();
  }

  useEffect(() => {
    const q = query(collection(db, "chat"), orderBy("createdAt", "asc"));
    const getChat = onSnapshot(q, (snapshot) => 
      setChat(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return getChat
  }, []);

  return (
    <Grid onSubmit={handleSubmit} align="center">
      <h1>Let's chat</h1>
      <Box sx={{ pb:7 }}>
        <List>
          {chats.map((chat) => {
            return (
              <Paper sx={{margin:"30px", padding:"10px", borderRadius:"30px"}} elevation={10}>
                <Avatar sx={{height:"30px", width:"30px", bgcolor:red[500]}} 
                alt="" src="/broken-img.jpg" />
                <p>{chat.text}</p>
                <Moment fromNow>{chat.createdAt.toDate()}</Moment>
              </Paper>
            )
          })}
        </List>
      </Box>
      <Paper sx={{ position:'fixed', bottom: 0, left: 0, right: 0}} elevation={10}>
        <TextField label="Type chat here" variant="standard" value={text} onChange={(e) => setText(e.target.value)}/>
        <Button sx={{ margin: '10px'}} variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
          Send
        </Button>
      </Paper>
    </Grid>
    )
}  

export default Chat;