import React, { useContext } from "react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { menuContext } from './../../context/MenuContext';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import zIndex from "@mui/material/styles/zIndex";
import { left } from "@popperjs/core";

const Navbar = () => {
  const { toggleMenu } = useContext(menuContext)

  const classes = {color: 'primary.dark' ,'&:hover': {backgroundColor: 'secondary.opaque', color: 'secondary.blueish'}}

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: 'primary.light',
        width: { xs: '100%', md: `calc(100% - 250px)` },
        mr: {md: '250px'},
        height: 70,
        boxShadow: 'unset',
        zIndex: '11111'
      }}
    >
      
      <Toolbar sx={{ minHeight: '70px !important', display:'flex', justifyContent: 'space-between' }}>
        <Box>
          <IconButton sx={{ mr: 2, display: { md: 'none' }, ...classes }} onClick={toggleMenu}>
              <MenuIcon />
          </IconButton>
          <IconButton  sx={{ ...classes  }}>
                <FullscreenIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton  sx={{ ...classes, flexGrow: 1 }}>
            <FullscreenExitIcon />
          </IconButton>
          <IconButton  sx={{ ...classes}}>
              <DarkModeOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
