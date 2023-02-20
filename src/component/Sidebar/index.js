import { Box, Drawer, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ConstructionIcon from '@mui/icons-material/Construction';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useState } from 'react';
import { ExpandMore } from '@mui/icons-material';

const label = [
  { menu: { name: 'Home', icon: <DashboardIcon />}, subMenu: [] },
  { menu: { name: 'tools', icon: <ConstructionIcon /> }, subMenu: ['todolist', 'calendar'] },
  { menu: { name: 'form', icon: <CalendarMonthIcon />}, subMenu: ['todolist', 'calendar'] },
]

const Content = () => {
  const [menuIndex, setMenuIndex] = useState(0)
  const [subMenuIndex, setSubMenuIndex] = useState('')

  const handleClickMenu = (index) => {
    if (menuIndex === index) {
      setMenuIndex("")
    } else {
      setMenuIndex(index)
    }
    setSubMenuIndex('')
  }


  return (
    <div>
      {label.map((item, index) => (
        <List sx={{color: 'secondary.text', cursor: 'pointer'}}  >
          <ListItem
            sx={{
              color: `${index === menuIndex ? 'primary.light' : 'secondary.text'}`,
              '&:hover': {color: 'primary.light'},
              '&:hover .child': {color: 'primary.light'}
            }}
            key={item.menu.name}
            disablePadding
          >
            <ListItemButton onClick={()=>{handleClickMenu(index)}}>
              <ListItemIcon
                className="child"
                sx={{ minWidth: '35px', color: `${index === menuIndex ? 'primary.light' : 'secondary.text'}` }}
              >
                {item.menu.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.menu.name}
                sx={{ textAlign: 'right'}}
              />
              {item.subMenu.length !== 0 &&
                  (index === menuIndex ? <ExpandMore sx={{ fontSize: '20px' }} /> : <KeyboardArrowLeftIcon sx={{ fontSize: '20px' }} />)}
            </ListItemButton>
          </ListItem>
          {item.subMenu.length !== 0 && 
            <Collapse in={index === menuIndex} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.subMenu.map((subItem, subIndex) => (
                  <ListItemButton
                    onClick={()=>{setSubMenuIndex(subIndex)}}
                    key={subItem}
                    sx={{
                      pr: 4,
                      '&:hover': {color: 'primary.light'},
                      '&:hover .child': { color: 'primary.light' },
                      color: `${subIndex === subMenuIndex ? 'primary.light' : 'secondary.text'}`
                    }}
                  >
                    <ListItemIcon  sx={{minWidth: '25px'}}>
                      <HorizontalRuleIcon
                        className='child'
                        sx={{
                          fontSize: 13,
                          color: `${subIndex === subMenuIndex ? 'primary.light' : 'secondary.text'}`,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={subItem}
                      sx={{
                        textAlign: 'right',
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          }
        </List>
      ))}
    </div>
  )
}
 

const Sidebar = () => {
  return (
    <Box component="nav" sx={{ flexShrink: { sm: 0 }, height: '100vh', width: { xs: 0, sm: '250px' } }}>
      <Drawer
          variant="permanent"
          PaperProps={{ sx: {backgroundColor: 'secondary.main'} }}
          sx={{ display: { xs: 'none', sm: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '250px'} }}
          anchor={'right'}
          open
      >
        <Typography variant='h5' sx={{ color: 'primary.light', textAlign: 'center', padding: '1rem' }}>Dashboard</Typography>
        <Content/>
      </Drawer>
    </Box>
  )
}

export default Sidebar