import React from "react";
import { Button, TextField }from '@mui/material';

function CreateUserForm({ signUpUser }) {
  return (
    <div className="Form">
      <form onSubmit={(e) => signUpUser(e)}>
        <TextField sx={{ m: 1 }} type="email" name="email" placeholder="Enter Email" variant="standard" />
        <TextField sx={{ m: 1 }} type="name" name="name" placeholder="Enter Name" variant="standard" />
        <TextField sx={{ m: 1 }} type="password" name="password" placeholder="Enter Password" variant="standard" />
        <Button sx={{ m: 2 }} type="submit" color="primary" variant="contained">Create User</Button>
      </form>
    </div>
  );
}

export default CreateUserForm;