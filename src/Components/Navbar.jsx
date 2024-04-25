import React from 'react';
import { Box, AppBar, Toolbar, Typography, styled, MenuItem, IconButton, Menu } from '@mui/material';
import { FitbitTwoTone, MenuTwoTone } from '@mui/icons-material';
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
})


const pages = ['About', 'Services', 'Testimonials', 'Team', 'Features', 'Contact', 'Gallery'];

export const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  return (
    <Box> 
        <AppBar sx={{ background: 'white', color: "black"}}>
          <StyledToolbar>
            <Box sx={{ display: 'flex', gap: '25px', alignItems: 'center'}}>
              <FitbitTwoTone sx={{fontSize: '45px', ml: '45px'}}></FitbitTwoTone>
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'block' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
                >
                Zaki
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex'}}}>
              {pages.map((page) => (
                  <MenuItem key={page}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton onClick={handleOpenNavMenu} sx={{ color: 'white'}}>
                <MenuTwoTone sx={{ color: 'black', fontSize: '45px', display: { xs: 'block', md:'none' }}} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </StyledToolbar>
        </AppBar>
    </Box>
  )
}
