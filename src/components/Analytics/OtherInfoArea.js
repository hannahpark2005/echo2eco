import { Box, Grid, Paper, Typography } from '@mui/material';
import Clock from './Clock';

export default function OtherInfoArea() {
  return (
    <Grid container item xs={12} spacing={4}>
      <Grid item md={4} xs={12}>
        <Paper
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
          }}
          variant='outlined'
        >
          <Box>
            <Typography color='GrayText' variant='body2'>
              Current Time
            </Typography>
            <Clock />
          </Box>
        </Paper>
      </Grid>
      <Grid item md={8} xs={12}>
        <Paper
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            padding: 10,
          }}
          variant='outlined'
        >
          <Box>
            <Typography color='GrayText' variant='body2'>
              Today's Weather
            </Typography>
            <Typography variant='h6'>12&deg;C Mostly cloudy</Typography>
          </Box>
          <Box>
            <Typography>
              <Typography component='span' color='GrayText'>
                Air Quality:
              </Typography>{' '}
              Poor
            </Typography>
            <Typography>
              <Typography component='span' color='GrayText'>
                Wind:
              </Typography>{' '}
              SE 7 km/h
            </Typography>
            <Typography>
              <Typography component='span' color='GrayText'>
                Wind Gusts:
              </Typography>{' '}
              9 km/h
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
