import React, { useState } from 'react';
import { initializeApp } from '@firebase/app';
import { getFirestore, collection, addDoc } from '@firebase/firestore';
import firebaseConfig from '../components/FirebaseConfig';

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

  return (
    <form onSubmit={handleSubmit}>
      <h1>Post</h1>
      <div>
        <label>Title</label>
        <input placeholder="Type here" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Text</label>
        <textarea placeholder="Type here" value={text} onChange={(e) => setText(e.target.value)}/>
        <lable>Name</lable>
        <input placeholder="Name" value={author} onChange={(e) => setAuthor(e.target.value)}/>
      </div>
      <button onClick={handleSubmit}>Submit Post</button>
    </form>
  )
}

export default CreatePost;
