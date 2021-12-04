import React from "react";
import { Button, TextField }from '@mui/material';

function LoginForm({ loginUser }) {
  return (
    <div className="Form">
      <form onSubmit={(e) => loginUser(e)}>
        <TextField sx={{ m: 1 }} type="email" name="email" placeholder="Enter Email" variant="standard" />
        <TextField sx={{ m: 1 }} type="password" name="password" placeholder="Enter Password" variant="standard" />
        <Button sx={{ m: 2 }} type="submit" color="primary" variant="contained">Login</Button>
      </form>
    </div>
  );
}

export default LoginForm;