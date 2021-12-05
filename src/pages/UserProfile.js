import React from "react";
import { Grid, Paper } from "@mui/material";

function UserProfile( { userInformation }) {
  const paperStyle={padding:20, height:'50vh', width:300, margin:"30px auto"};

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h1>User Profile</h1>
          <p>EMAIL: {userInformation.email}</p>
          <p>NAME: {userInformation.displayName}</p>
          <p>UID: {userInformation.uid}</p>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default UserProfile;