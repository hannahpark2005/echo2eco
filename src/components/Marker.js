import { styled, keyframes } from '@mui/system';

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

const Marker = styled('div')(({ state, coord, isStatic = false }) => ({
  position: isStatic ? 'static' : 'absolute',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  // border: '2px solid rgba(255,255,255,0.9)',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  top: coord.y + '%',
  left: coord.x + '%',
  // boxShadow:
  // 'rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0',
  backgroundImage:
    state === 2
      ? 'linear-gradient(-180deg, #ffe71b, #ffb506)'
      : state === 3
      ? 'linear-gradient(-180deg, #ff371b, #d21b02)'
      : state === 1
      ? 'linear-gradient(#5a5f65 ,#43464a)'
      : 'linear-gradient(#bec9df1c ,#d5d5d57a)',
  boxShadow: 'rgba(255,255,255,.6) 0 1px 1px inset',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0 2px 4px',
    zIndex: -1,
  },
  animation: state === 2 || state === 3 ? `${pulse} 2s infinite` : 'none',
}));

export default Marker;
