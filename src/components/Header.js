import React from "react";
import { AppBar, Box, Button, Typography } from "@mui/material";


function Header({ logout, loggedIn }) {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <header className="Header">
          <Typography className="Logo">Final Project</Typography>
          <nav>
            {!loggedIn && (
              <>
                <Button href="/" color="inherit">Login</Button>
                <Button href="/create" color="inherit">Create User</Button>
              </>
            )}
            {loggedIn && (
              <>
                <Button href="/home" color="inherit">Dashboard</Button>
                <Button href="/user/id" color="inherit">User Profile</Button>
                <Button onClick={() => logout()} color="inherit">Log Out</Button>
              </>
            )}
          </nav>
        </header>
      </AppBar>
    </Box>
  );
}

export default Header;