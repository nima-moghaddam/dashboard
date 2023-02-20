import {
  Box, Drawer, Typography, List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Collapse, useMediaQuery, useTheme
} from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ConstructionIcon from '@mui/icons-material/Construction';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useState, useContext } from 'react';
import { ExpandMore } from '@mui/icons-material';
import { menuContext } from './../../context/MenuContext';


const label = [
  { menu: { name: 'Home', icon: <DashboardIcon />}, subMenu: [] },
  { menu: { name: 'tools', icon: <ConstructionIcon /> }, subMenu: ['todolist', 'calendar'] },
  { menu: { name: 'form', icon: <CalendarMonthIcon />}, subMenu: ['todolist', 'calendar'] },
]

const Content = () => {
  const [menuIndex, setMenuIndex] = useState(0)
  const [subMenuIndex, setSubMenuIndex] = useState('')
  const {toggleMenu} = useContext(menuContext)


  const handleClickMenu = (index) => {
    if (menuIndex === index) {
      setMenuIndex("")
    } else {
      setMenuIndex(index)
    }
    setSubMenuIndex('')
    label[index].subMenu.length === 0 && toggleMenu()
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
                    onClick={() => { setSubMenuIndex(subIndex);toggleMenu() }}
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
  const theme = useTheme();
  const inBreakpoint = useMediaQuery(theme.breakpoints.up('md'));
  const {toggleMenu, openMenu} = useContext(menuContext)

  return (
    <Box component="nav" sx={{ flexShrink: { sm: 0 }, height: '100vh', width: { xs: 0, md: '250px' } }}>
      <Drawer
          variant={inBreakpoint ? 'permanent' : 'temporary'}
          PaperProps={{ sx: {backgroundColor: 'secondary.main', left: "unset", right: '0' } }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '250px' }
          }}
          anchor={'left'}
          open={openMenu}
          onClose={toggleMenu}
      >
        <Typography variant='h5' sx={{ color: 'primary.light', textAlign: 'center', padding: '1rem' }}>Dashboard</Typography>
        <Content/>
      </Drawer>
    </Box>
  )
}

export default Sidebar