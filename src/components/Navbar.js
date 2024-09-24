import DataObjectIcon from '@mui/icons-material/DataObject';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = ({ drawerList }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };
  const { auth, logout } = useAuth();

  const handleButtonClick = (path) => {
    toggleDrawer(false);
    navigate(path);
  };

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  }

  const DrawerList = (
    <Box sx={{ width: 250 ,
      '& MuiBox-root':{
        height: '40px'
      }
    }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {drawerList.map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleButtonClick(path)}>
              <ListItemIcon>
                {icon ? <icon.type {...icon.props} /> : <DataObjectIcon />}
              </ListItemIcon>
              <ListItemText primary={text} onClick={toggleDrawer(false)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1, top: 0, left: 0, right: 0 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              React App
            </Typography>
            {auth.isLoggedIn ? <Button onClick={handleLogout} color="inherit">Logout</Button> : <Button onClick={() => <Link to="/login" />} color="inherit">Login</Button>}
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} onClose={toggleDrawer(false)} >
        {DrawerList}
      </Drawer>
    </>
  );
};

export default Sidebar;
