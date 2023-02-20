import React, { useContext, useState } from "react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { menuContext } from './../../context/MenuContext';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Navbar = () => {
  const [fullscreen, setFullscreen] = useState(false)
  const { toggleMenu } = useContext(menuContext)

  const classes = { color: 'primary.dark', '&:hover': { backgroundColor: 'secondary.opaque', color: 'secondary.blueish' } }
  
  const handleFullscreen = () => {
    if (!fullscreen) {
      document.body.requestFullscreen();
      setFullscreen(true)
    } else {
      document.exitFullscreen();
      setFullscreen(false)
    }
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: 'primary.light',
        width: { xs: '100%', md: `calc(100% - 250px)` },
        mr: {md: '250px'},
        height: 70,
        boxShadow: 'unset',
        zIndex: '10'
      }}
    >
      
      <Toolbar sx={{ minHeight: '70px !important', display:'flex', justifyContent: 'space-between' }}>
        <Box>
          <IconButton sx={{ mr: 2, display: { md: 'none' }, ...classes }} onClick={toggleMenu}>
              <MenuIcon />
          </IconButton>
          
        </Box>
        <Box>
          <IconButton sx={{ ml: 2, ...classes}} onClick={handleFullscreen}>
            {fullscreen ? <FullscreenExitIcon /> : <FullscreenIcon/>}
          </IconButton>
          <IconButton  sx={ {ml: 2, ...classes}}>
              <DarkModeOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
