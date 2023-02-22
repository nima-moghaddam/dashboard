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
import { AppBar, Avatar, Box, IconButton, Toolbar, Popover, Typography, Divider, Grid, Link} from "@mui/material";
import telegramIcn from '../../assets/icon/telegram.png'
import githubIcn from '../../assets/icon/github.png'
import webIcn from '../../assets/icon/web.png'
import whatsappIcn from '../../assets/icon/whatsapp.png'
import linkedinIcn from '../../assets/icon/linkedin.png'
import youtubIcn from '../../assets/icon/youtube.png'



const socialLinks = [
  { link: "https://t.me/NimaSm73", file: telegramIcn, name: 'Telegram' },
  { link: "https://wa.me/+989156969259", file: whatsappIcn, name: 'Whatsapp'  },
  { link: "https://github.com/nima-moghaddam", file: githubIcn, name: 'Github'  },
  { link: "https://linkedin.com/in/nima-moghaddam-61622321a", file: linkedinIcn, name: 'Linkedin'  },
  { link: "https://myportfolio-e5675.web.app/", file: webIcn, name: 'Portfolio' },
  { link: "https://www.youtube.com/channel/UClOkRfCapQQzM65mJPtylxQ", file: youtubIcn, name: 'Youtube' },
]

const Navbar = () => {
  const [fullscreen, setFullscreen] = useState(false)
  const [openSearch, setOpenSearch] = useState(null);
  const [openContantMe, setOpenContantMe] = useState(null);

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
            onClick={event => setOpenSearch(event.currentTarget)}
          >
            <SearchIcon />
          </IconButton>
          <Popover
            elevation={0}
            anchorEl={openSearch}
            open={Boolean(openSearch)}
            PaperProps={{
              sx: {
                mt: 1.8,
                p:3,
                width: '100%',
                maxWidth: '100%',
                boxShadow: '0 5px 10px rgb(30 32 37 / 12%)',
                left: '0 !important',
                backgroundColor: 'primary.navWhite'
              }
            }}
            onClose={() => setOpenSearch(null)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
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
          <IconButton
            sx={{ ml: 2, ...classes }}
            onClick={event => setOpenContantMe(event.currentTarget)}
          >
            <ShareIcon />
          </IconButton>
          <Popover
            elevation={0}
            anchorEl={openContantMe}
            open={Boolean(openContantMe)}
            PaperProps={{
              sx: {
                mt: 1.8,
                boxShadow: '0 5px 10px rgb(30 32 37 / 12%)',
                width: {xs: '100%', sm: '320px'},
                maxWidth: '100%',
                backgroundColor: 'primary.navWhite',
                left: { xs: '0 !important', sm: '80px !important' },
              }
            }}
            onClose={() => setOpenContantMe(null)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
          >
            <Typography sx={{ color: 'text.black', p:3, fontWeight: '600' }}> لینک های ارتباطی :</Typography>
            <Divider variant="string" />
            <Grid container sx={{ p: 1 }} columns={{ xs: 12, sm: 9}}>
              {socialLinks.map((item) => (
                <Grid item xs={4} sm={3} key={item.file}>
                  <Link
                    href={item.link}
                    underline="none"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: 'text.dark',  }}
                  >
                    <Box
                      sx={{
                        '&:hover': { backgroundColor: 'primary.hover' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 2,
                        borderRadius: '3px'
                      }}
                    >
                      <img height={'24px'} src={item.file} alt={item.name} />
                      <Typography sx={{mt: 1}}>{item.name}</Typography>
                    </Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Popover>
          <Avatar alt="profile avatar" src={profile_pic} sx={{cursor: 'pointer'}} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
