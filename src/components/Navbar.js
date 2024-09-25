import DataObjectIcon from '@mui/icons-material/DataObject';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, CssBaseline } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    width: "100%",
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: `${drawerWidth}px`,
          width: `calc(100% - ${drawerWidth}px)`,
        },
      },
    ],
  }),
);


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'center',
}));

const Navbar = ({ drawerList, children }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state = null) => () => {
    setOpen(state ? state : !open);
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
    <Box sx={{
      width: drawerWidth,
      '& MuiBox-root': {
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
      <Box display={'flex'}>
        <CssBaseline />
        <AppBar open={open} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(null)}
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              React App
            </Typography>
            <Typography variant="h6" component="div">
              {auth.isLoggedIn ? <Button onClick={handleLogout} color="inherit">Logout</Button> : <Button onClick={() => <Link to="/login" />} color="inherit">Login</Button>}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} onClose={toggleDrawer(false)} sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
        variant="persistent"
        anchor="left" >
        <DrawerHeader />
        {DrawerList}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </>
  );
};

export default Navbar;
