import React from "react";
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';

function Header({ logout, loggedIn }) {
  const [anchorEl, setAnchorE1] = React.useState(null);
  const handleClose = () => {
    setAnchorE1(null);
  };
  const handleMenu = (event) => {
    setAnchorE1(event.currentTarget);
  };

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
                <Button color="inherit">Create Post</Button>
                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu 
                    id="menu-appbar" 
                    anchorEl={anchorEl} 
                    anchorOrigin={{
                      vertical: 'top', horizontal: 'right'
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top', horizontal: 'right'
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <Button href="/user/id" color="inherit">User Profile</Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Button onClick={() => logout()} color="inherit">Log Out</Button>
                    </MenuItem>
                </Menu>
                </div>
              </>
            )}
          </nav>
        </header>
      </AppBar>
    </Box>
  );
}

export default Header;