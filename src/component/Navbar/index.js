import React, { useContext } from "react";
import { Box, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { menuContext } from './../../context/MenuContext';

const Navbar = () => {
  const {toggleMenu} = useContext(menuContext)

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
        <IconButton sx={{ mr: 2, display: { md: 'none' } }} onClick={toggleMenu}>
          <MenuIcon />
        </IconButton>
      Navbar
    </Box>
  );
};

export default Navbar;
