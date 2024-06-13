import React from "react";
import "./App.css";
import CustomTypography from "./CustomTypography";
import CustomButton from "./CustomButton";
import { Button } from "@mui/material";
import CustomTextField from "./CustomTextField";

const App = () => {
  return (
    <div>
      {/* <CustomTypography /> */}

      {/* <CustomButton /> */}

      {/* <Button
        variant="contained"
        color="success"
        onClick={() => {
          console.log("I am  clicked");
        }}
      >
        Click me
      </Button> */}

      <CustomTextField />
    </div>
  );
};

export default App;
