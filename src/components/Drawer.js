import styled from '@emotion/styled';
import { Drawer as MuiDrawer } from '@mui/material';

const DRAWER_WIDTH = 350;

const openedMixin = (theme) => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflow: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflow: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'isMobile',
})(({ theme, open, isMobile }) => ({
  width: DRAWER_WIDTH,
  position: 'absolute',
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiPaper-root': {
    top: isMobile ? 48 : 64,
    backgroundColor: open ? '#fff' : '#344D67',
    boxShadow: open ? 'rgba(0, 0, 0, 0.5) 0 1px 15px' : 'none',
  },
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export { Drawer, DrawerHeader };
