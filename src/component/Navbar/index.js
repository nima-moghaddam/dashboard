import React from "react";
import { Box } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.light',
        width: "100%",
        position: "fixed",
        height: 70,
        display: "flex",
        alignItems: "center",
        zIndex: '10',
      }}
    >
      Navbar
    </Box>
  );
};

export default Navbar;
