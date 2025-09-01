import { Box, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';

export default function SummaryArea() {
  const muiTheme = useTheme();
  const isTablet = useMediaQuery(muiTheme.breakpoints.down('md'));

  return (
    <Paper
      style={{
        height: '100%',
        padding: 20,
        display: 'flex',
        flexDirection: isTablet ? 'row' : 'column',
        gap: 20,
      }}
      variant='outlined'
    >
      <Box textAlign='center'>
        <Typography color='GrayText' variant='body2'>
          Incidents Today
        </Typography>
        <Typography padding={1} borderRadius={1} marginTop={0.5} variant='h4'>
          3
        </Typography>
      </Box>
      <Box textAlign='center'>
        <Typography color='GrayText' variant='body2'>
          Reports Today
        </Typography>
        <Typography padding={1} borderRadius={1} marginTop={0.5} variant='h4'>
          1
        </Typography>
      </Box>
      <Box textAlign='center'>
        <Typography color='GrayText' variant='body2'>
          Active Rescuers
        </Typography>
        <Typography padding={1} borderRadius={1} marginTop={0.5} variant='h4'>
          6
        </Typography>
      </Box>
    </Paper>
  );
}
