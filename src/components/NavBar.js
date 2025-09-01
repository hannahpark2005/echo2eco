import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import useTheme from '@mui/material/styles/useTheme';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import * as React from 'react';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Home', 'Analytics', 'Reports', 'About'];
const navItemsPath = ['', 'analytics', 'reports', 'about'];

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function DrawerAppBar(props) {
  const { window } = props;
  const muiTheme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2 }}>
        <Link
          to={navItemsPath[0]}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <img
            width={100}
            height={100}
            alt='complex'
            src='/Echo2EcoLogoLightBG.png'
          />
        </Link>
      </Box>
      <Divider />
      <Grid
        container
        direction='column'
        justifyContent='flex-start'
        alignItems='center'
      >
        {navItems.map((item, idx) => (
          <Grid item key={idx}>
            <Link underline='none' to={navItemsPath[idx]}>
              <Button key={idx.toString()}>
                <Typography color='black'>{item}</Typography>
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', position: 'relative' }}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color='primary' component='nav' sx={{ transition: '1000ms' }}>
          {/* <AppBar component="nav" sx={{ bgcolor: "#f7f7f7", background: "transparent", zIndex: { xs: "-1", sm: "999", md: "999" }, backdropFilter: { xs: "blur(0px)", sm: "blur(6px)", md: "blur(6px)", }, boxShadow: "rgba(246,247,246,.1) 1px 1px 1px 1px", transition: "1000ms" }} > */}
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                flexGrow: 1,
                marginTop: 2,
                display: { xs: 'none', sm: 'block' },
              }}
            >
              <Link
                to={navItemsPath[0]}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <img width={130} alt='complex' src='/Echo2EcoLogoDarkBG.png' />
              </Link>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {/* How to make 'Your Team' button filled button? */}
              {navItems.map((item, idx) => (
                <Link
                  key={idx.toString()}
                  to={navItemsPath[idx]}
                  // style={{ textDecoration: 'none', color: 'black' }}
                  style={idx > 0 ? { marginLeft: 10 } : {}}
                >
                  <Button key={item}>
                    <Typography color='white'>{item}</Typography>
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* padding part is the white space between main body and nav bar */}
      <Toolbar />
      {/* <Box component='main' sx={{ p: isMobile ? 0 : 1.9 }}> */}
      {/* <Box component="main" sx={{p: isMobile? 0 : 1.9}}> */}
      {/* </Box> */}
    </Box>
  );
}

export default DrawerAppBar;
