import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import {
  IncidentsByDangerLevelChart,
  IncidentsBySpeciesChart,
  IncidentsBySensorChart,
  BatteryHealthChart,
} from '../components/Charts';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';
import { OtherInfoArea, SummaryArea } from '../components/Analytics';
import { Paper } from '@mui/material';

const Analytics = () => {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const maxWidth = muiTheme.breakpoints.values.lg;

  return (
    <Grid
      container
      paddingY={5}
      paddingX={isMobile ? 5 : 10}
      flexDirection='row'
      maxWidth={maxWidth}
      margin='0 auto'
    >
      <Grid container item xs={12} spacing={4}>
        <Grid item md={2} xs={12}>
          <SummaryArea />
        </Grid>
        <Grid container item md={10} xs={12} rowSpacing={4}>
          <OtherInfoArea />
          <Grid item xs={12}>
            <Paper variant='outlined' style={{ padding: 20 }}>
              <BatteryHealthChart />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12} md={8} margin='0 auto' rowSpacing={6}>
        <Grid item xs={12}>
          <Box justifyContent='center' alignItems='center'>
            <IncidentsBySpeciesChart />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box justifyContent='center' alignItems='center'>
            <IncidentsByDangerLevelChart />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box justifyContent='center' alignItems='center'>
            <IncidentsBySensorChart />
          </Box>
        </Grid>
      </Grid>
      {/* <Grid container item xs={12} rowSpacing={5}>
        <Grid item xs={12} md={6}>
          <Box justifyContent='center' alignItems='center'>
            <IncidentsBySpeciesChart />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box justifyContent='center' alignItems='center'>
            <IncidentsByDangerLevelChart />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box justifyContent='center' alignItems='center'>
            <IncidentsBySensorChart />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box justifyContent='center' alignItems='center'>
            <BatteryHealthChart />
          </Box>
        </Grid>
      </Grid> */}
    </Grid>
  );
};

export default Analytics;
