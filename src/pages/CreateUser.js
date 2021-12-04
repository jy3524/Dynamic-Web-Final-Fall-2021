import React, { useCallback } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import CreateUserForm from "../components/CreateUserForm";
import { Grid, Paper, Avatar }from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

function CreateUser({ setLoggedIn, setUserInformation }) {
  const signUpUser = useCallback((e) =>  {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
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

  const paperStyle={padding:20, height:'60vh', width:300, margin:"30px auto"};
  const avatarStyle={backgroundColor: "#1bbd7e"};
  
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}><PersonAddAltIcon /></Avatar>
          <h1>Create User</h1>
        </Grid>
        <CreateUserForm signUpUser={signUpUser} />
      </Paper>
    </Grid>
    
  );
}

export default CreateUser;