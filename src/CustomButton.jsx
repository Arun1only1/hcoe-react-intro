import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
const CustomButton = () => {
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Typography>Variant</Typography>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="text">text</Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Typography>Color</Typography>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          startIcon={<ModeEditOutlineOutlinedIcon />}
        >
          Edit user
        </Button>

        <Button
          variant="outlined"
          color="error"
          endIcon={<DeleteOutlineOutlinedIcon />}
        >
          Remove user
        </Button>

        <IconButton>
          <AddLocationAltOutlinedIcon />
        </IconButton>
      </Box>
    </div>
  );
};

export default CustomButton;
