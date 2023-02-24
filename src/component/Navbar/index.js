import React, { useContext, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { menuContext } from './../../context/MenuContext';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { themeContext } from "../../context/ThemeContext";
import { AppBar, Avatar, Box, IconButton, Toolbar } from "@mui/material";
import ContactLink from "./Contact/ContactLink";
import SearchInput from "./Search/SearchInput";
import ProfileDropdown from "./Profile/ProfileDropdown";
import SearchBar from "./Search/SearchBar";



const Navbar = () => {
  const [fullscreen, setFullscreen] = useState(false)

  const { toggleMenu } = useContext(menuContext)
  const { toggleColorMode, mode } = useContext(themeContext)

  const classes = { color: 'primary.gray', '&:hover': { backgroundColor: 'secondary.lightBlue', color: 'secondary.blue' } }
  
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
        width: { xs: '100%', md: `calc(100% - 250px)` },
        mr: {md: '250px'},
        height: 70,
        boxShadow: 'unset',
        zIndex: '10'
      }}
    >
      
      <Toolbar sx={{ minHeight: '70px !important', display:'flex', justifyContent: 'space-between', backgroundColor: 'primary.navWhite', }}>
        <Box>
          <IconButton sx={{ mx: 2, display: { md: 'none' }, ...classes }} onClick={toggleMenu}>
              <MenuIcon />
          </IconButton>
          <Box sx={{display: {xs: 'none', md:'block'}}}>
            <SearchInput/>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SearchBar classes={classes} />
          <IconButton sx={{ ml: 2, ...classes}} onClick={handleFullscreen}>
            {fullscreen ? <FullscreenExitIcon /> : <FullscreenIcon/>}
          </IconButton>
          <IconButton sx={{ml: 2, ...classes}} onClick={toggleColorMode}>
            {mode === 'light'? <DarkModeOutlinedIcon />: <LightModeOutlinedIcon/> }
          </IconButton>
          <IconButton  sx={{ml: 2, ...classes}}>
            <NotificationsNoneIcon />
          </IconButton>
          <ContactLink classes={classes} />
          <ProfileDropdown />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
