import React, { useState } from "react";
import profile_pic from '../../../assets/img/profile.png'
import { Avatar, Box, Popover, Typography,List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Divider, Link,
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LogoutIcon from '@mui/icons-material/Logout';


const menu = [
  { name: 'حساب کاربری', icon: <AccountCircleIcon/>, url: '#' },
  {name: 'فرایندها', icon: <ListAltIcon/>, url: '#'},
  {name: 'خروج', icon: <LogoutIcon/>, url: '#'},
]

const ProfileDropdown = () => {
  const [open, setOpen] = useState(null);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          backgroundColor: { xs: 'unset', md: 'primary.hover' },
          p: 1.5,
          height: 70,
          width: {xs: '70px', md: 'unset'}
        }}
        onClick={event => setOpen(event.currentTarget)}
      >
        <Avatar alt="profile avatar" src={profile_pic} sx={{ ml:2 }} />
        <Box sx={{ display: {xs: 'none', md: 'block'}}}>
          <Typography sx={{color: 'text.black', fontWeight: 600, fontSize: '14px'}}>نیما مقدم</Typography>
          <Typography sx={{color: 'text.grey', fontWeight: 600, fontSize: '10px'}}>ادمین</Typography>
        </Box>
      </Box>
      <Popover
        elevation={0}
        anchorEl={open}
        open={Boolean(open)}
        PaperProps={{
          sx: {
            mt: 0,
            boxShadow: '0 5px 10px rgb(30 32 37 / 12%)',
            width: {xs: '100%', sm: '200px'},
            maxWidth: '100%',
            backgroundColor: 'primary.navWhite',
            left: { xs: '0 !important', sm: '24px !important' },
          }
        }}
        onClose={() => setOpen(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
      >
        <Typography sx={{ color: 'text.grey', p: 1, mr: 1}}>خوش آمدید</Typography>
        <List>
          {menu.map((item) => (
            <Link href={item.url}>
              <ListItem disablePadding  key={item.name}>
                <ListItemButton >
                  <ListItemIcon sx={{minWidth: '35px', color: 'text.black'}}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText sx={{ textAlign: 'right', color: 'text.black'}}>
                    {item.name}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              {item.name === 'فرایندها' && <Divider />}
            </Link>
         ))}
        </List>
      </Popover>
      </>
  )
}

export default ProfileDropdown