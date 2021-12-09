import React, { useEffect, useState } from 'react';
import { initializeApp } from '@firebase/app';
import { getFirestore, addDoc, getDocs, collection } from '@firebase/firestore';
import firebaseConfig from '../components/FirebaseConfig';
import { Avatar, Button, Grid, TextField }from '@mui/material';
import { red } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Chat() {
  const [text, setText] = useState("");
  const [chats, setChat] = useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault(); 
    await addDoc(collection(db, "chat"), {
      text,
    });
    setText("")
    window.location.reload();
  }

  useEffect(() => {
    const getChat = async () => {
      const data = await getDocs(collection(db, "chat"));
      setChat(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getChat();
  }, []);

  return (
    <Grid onSubmit={handleSubmit} align="center">
      <h1>Let's chat</h1>
      <div>
        {chats.map((chat) => {
          return (
            <div>
              <Avatar sx={{height:"50px", width:"50px", bgcolor:red[500]}} 
              alt="" src="/broken-img.jpg" />
              <p>{chat.text}</p>
            </div>
          )
        })}
          <TextField label="Type chat here" variant="standard" value={text} onChange={(e) => setText(e.target.value)}/>
          <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
            Send
          </Button>
      </div>
    </Grid>
    )
}  

export default Chat;