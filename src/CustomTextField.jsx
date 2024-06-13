import {
  CircularProgress,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  LinearProgress,
  TextField,
} from "@mui/material";
import React from "react";

const CustomTextField = () => {
  return (
    <div>
      <TextField
        required
        label="Name"
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
      <FormHelperText error>Name is required</FormHelperText>

      <CircularProgress color="secondary" />
      <LinearProgress color="success" />
    </div>
  );
};

export default CustomTextField;
