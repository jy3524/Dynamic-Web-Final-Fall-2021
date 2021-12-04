import React, { useCallback } from "react";
import { signInWithEmailAndPassword, getAuth } from "@firebase/auth";
import LoginForm from "../components/LoginForm";
import { Grid, Paper, Avatar }from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

function Login({ setLoggedIn, setUserInformation }) {
  const loginUser = useCallback((e) =>  {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setLoggedIn(true)
        setUserInformation({
          email: user.email,
          displayName: user.displayName,
          uid: user.uid,
          accessToken: user.accessToken,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn({ error, errorCode, errorMessage })
      });
  }, [setLoggedIn, setUserInformation]);
  
  const paperStyle={padding:20, height:'70vh', width:280, margin:"20px auto"};
  const avatarStyle={backgroundColor: "#1bbd7e"};

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}><LockIcon /></Avatar>
          <h1>Login</h1>
        </Grid>
        <LoginForm loginUser={loginUser} />
      </Paper>
    </Grid>
  );
}

export default Login;