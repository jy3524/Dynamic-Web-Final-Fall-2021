import React from "react";
import { Avatar, Grid, Paper } from "@mui/material";
import { red } from '@mui/material/colors';

function UserProfile( { userInformation }) {
  const paperStyle={padding:20, height:'50vh', width:300, margin:"30px auto"};

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h1>Profile</h1>
          <Avatar sx={{height:"70px", width:"70px", bgcolor:red[500]}} alt="" src="/broken-img.jpg"/>
          <p className="userprofile">{userInformation.displayName}</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p className="userprofile">{userInformation.email}</p>
          <p className="userprofile">ID: {userInformation.uid}</p>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default UserProfile;