import React, { useContext, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { menuContext } from './../../context/MenuContext';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShareIcon from '@mui/icons-material/Share';
import profile_pic from '../../assets/img/profile.png'
import SearchIcon from '@mui/icons-material/Search';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Search from "./Search";
import { themeContext } from "../../context/ThemeContext";
import {
  AppBar, Avatar, Box, IconButton,
  Toolbar, Popover
} from "@mui/material";


const Navbar = () => {
  const [fullscreen, setFullscreen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);

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
            <Search/>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            sx={{ ml: 2, display: { xs: 'inline-flex', md: 'none' }, ...classes }}
            onClick={event => setAnchorEl(event.currentTarget)}
          >
            <SearchIcon />
          </IconButton>
          <Popover
            elevation={0}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            PaperProps={{
              sx: {
                mt: 1.8,
                p:3,
                width: '100%',
                maxWidth: '100%',
                left: '0 !important',
                backgroundColor: 'primary.navWhite'
              }
            }}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{ vertical: 'bottom',horizontal: 'left'}}
          >
            <Search />
          </Popover>
          <IconButton sx={{ ml: 2, ...classes}} onClick={handleFullscreen}>
            {fullscreen ? <FullscreenExitIcon /> : <FullscreenIcon/>}
          </IconButton>
          <IconButton sx={{ml: 2, ...classes}} onClick={toggleColorMode}>
            {mode === 'light'? <DarkModeOutlinedIcon />: <LightModeOutlinedIcon/> }
          </IconButton>
          <IconButton  sx={{ml: 2, ...classes}}>
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton  sx={{ml: 2, ...classes}}>
            <ShareIcon />
          </IconButton>
          <Avatar alt="profile avatar" src={profile_pic} sx={{cursor: 'pointer'}} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
