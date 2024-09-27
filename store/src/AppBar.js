import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';
import Badge from '@mui/material/Badge';

const drawerWidth = 240;
const navItems = [
  { label: 'Store', path: '/Store' },
  { label: 'Edit', path: '/Edit' },
  { label: 'Cart', path: '/Cart' },
  { label: 'Add Board', path: '/AddBoard' },
  { label: 'Logout', path: '/' },
];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate(); 
  const user = JSON.parse(localStorage.getItem("user"));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavigate = (path) => {
    navigate(path);
    if (path === '/') {
      localStorage.clear()
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Hayden's Store
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavigate(item.path)}>
              {index === 2 ? ( // Add Badge on the 3rd item (index 2)
                <Badge badgeContent={4} color="error">
                  <ListItemText primary={item.label} />
                </Badge>
              ) : (
                <ListItemText primary={item.label} />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Hayden's Store
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, index) => (
              <Button key={item.label} sx={{ color: '#fff' }} onClick={() => handleNavigate(item.path)}>
                {index === 2 ? (
                  <Badge badgeContent={user.carts.length} color="error">
                    {item.label}
                  </Badge>
                ) : (
                  item.label
                )}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          {/* You can add content here */}
        </Typography>
      </Box>
    </Box>
  );
}
