import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import './App.css';

const navItems = [
  { label: 'Store', path: '/Store' },
  { label: 'Edit', path: '/Edit' },
  { label: 'Cart', path: '/Cart' },
  { label: 'Add Board', path: '/AddBoard' },
  { label: 'Logout', path: '/' },
];

export default function DrawerAppBar() {
  const navigate = useNavigate(); 
  const user = JSON.parse(localStorage.getItem("user"));

  const handleNavigate = (path) => {
    navigate(path);
    if (path === '/') {
      localStorage.clear()
    }
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar className='toolbar'>
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
    </Box>
  );
}
