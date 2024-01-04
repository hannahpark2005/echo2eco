import {
  Box,
  Tooltip,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
  Badge,
  Chip,
  ListItemIcon,
  ClickAwayListener,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import {
  Announcement,
  ChevronLeft,
  Dangerous,
  Delete,
  GpsFixed,
  Task,
  Warning,
} from '@mui/icons-material';
import { Drawer, DrawerHeader } from './Drawer';
import Marker from './Marker';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { alertsAtom, sensorsAtom } from '../data/atoms';

const alertDescriptions = {
  1: 'Sound detected but not an animal.',
  2: 'Sound detected and low danger.',
  3: 'Sound detected and potentially animal in danger!',
};

const stateDescriptions = {
  0: 'Idle',
  1: 'False Alarm',
  2: 'Warning',
  3: 'Danger',
};

export default function Map() {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isDesktop = useMediaQuery(muiTheme.breakpoints.up('lg'));
  const [open, setDrawerOpen] = useState(false);

  const sensorsData = useRecoilValue(sensorsAtom);
  const alertsScenarioData = useRecoilValue(alertsAtom);
  const [sensors, setSensors] = useState();
  const [scenario, setScenario] = useState('scenario1');
  const [alerts, setAlerts] = useState();

  const handleDeleteAlert = (targetAlert) => {
    const updatedAlerts = alerts.filter((alert) => alert.id !== targetAlert.id);
    const updatedSensors = sensors.map((sensor) => {
      if (sensor.id === targetAlert.id) {
        return {
          ...sensor,
          state: 'idle',
          description: 'No alerts',
        };
      }
      return sensor;
    });

    setAlerts(updatedAlerts);
    setSensors(updatedSensors);
  };

  useEffect(() => {
    let activeScenario;
    switch (scenario) {
      case 'scenario1':
        activeScenario = alertsScenarioData.scenario1;
        break;
      case 'scenario2':
        activeScenario = alertsScenarioData.scenario2;
        break;
      case 'scenario3':
        activeScenario = alertsScenarioData.scenario3;
        break;
      default:
        break;
    }

    // create sensors array from sensorsData with their coord & state
    const updatedSensors = sensorsData.map((sensor) => {
      // find sensors that have alerts from activeScenario to get alert info
      const match = activeScenario.find(
        (scenarioItem) => scenarioItem.id === sensor.id
      );

      return match
        ? {
            ...match,
            ...sensor,
            state: match.dangerLevel,
            description: alertDescriptions[match.dangerLevel],
          }
        : { ...sensor, state: 0, description: 'No alerts' };
    });
    console.log(updatedSensors);

    const sensorsWithAlerts = updatedSensors.filter(
      (sensor) => sensor.state !== 0
    );

    setAlerts(sensorsWithAlerts);
    setSensors(updatedSensors);
  }, [alertsScenarioData, scenario, sensorsData]);

  const handleChangeScenario = (event, selectedScenario) => {
    setScenario(selectedScenario);
  };

  const toggleDrawer = () => {
    if (isDesktop) return;
    setDrawerOpen(!open);
  };

  const handleClickAway = () => {
    if (isDesktop) return;
    setDrawerOpen(false);
  };

  return (
    <Box
      component='div'
      sx={{
        width: '100%',
        height: `calc(100vh - ${isMobile ? '56px' : '64px'})`,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#34A3DB',
      }}
    >
      <ClickAwayListener onClickAway={handleClickAway}>
        <Drawer
          variant='permanent'
          open={isDesktop ? true : open}
          isMobile={isMobile}
        >
          <DrawerHeader>
            {!isDesktop && (
              <IconButton onClick={toggleDrawer}>
                {open ? (
                  <ChevronLeft />
                ) : (
                  <Badge badgeContent={alerts?.length} color='error'>
                    <Announcement sx={{ color: 'white' }} />
                  </Badge>
                )}
              </IconButton>
            )}
          </DrawerHeader>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              visibility: isDesktop ? 'visible' : open ? 'visible' : 'hidden',
            }}
          >
            <ToggleButtonGroup
              value={scenario}
              exclusive
              onChange={handleChangeScenario}
              color='primary'
              sx={{ justifyContent: 'center', marginBottom: 2 }}
            >
              <ToggleButton value='scenario1'>Scenario 1</ToggleButton>
              <ToggleButton value='scenario2'>Scenario 2</ToggleButton>
              <ToggleButton value='scenario3'>Scenario 3</ToggleButton>
            </ToggleButtonGroup>
            <Typography variant='h6' sx={{ paddingLeft: 2, marginTop: 2 }}>
              Recent Alerts{' '}
              <Chip label={alerts?.length} color='error' size='small' />
            </Typography>
            <List>
              {alerts &&
                alerts.map((alert, index) => (
                  <Fragment key={alert.id}>
                    {index > 0 && (
                      <Divider sx={{ backgroundColor: 'rgba(0,0,0,0.1)' }} />
                    )}
                    <ListItem>
                      <ListItemIcon sx={{ paddingLeft: 1 }}>
                        {alert.dangerLevel === 2 ? (
                          <Warning fontSize='large' color='warning' />
                        ) : alert.dangerLevel === 3 ? (
                          <Dangerous fontSize='large' color='error' />
                        ) : (
                          <GpsFixed fontSize='large' color='action' />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <>
                            <Typography
                              fontWeight='bold'
                              variant='body2'
                              component='span'
                            >
                              {alert.sensorName}
                            </Typography>
                            <Typography variant='body2' component='span'>
                              {' '}
                              at{' '}
                              {new Date(alert.timestamp).toLocaleTimeString(
                                [],
                                {
                                  timeStyle: 'short',
                                }
                              )}
                            </Typography>
                          </>
                        }
                        secondary={
                          <Typography variant='body2' sx={{ textWrap: 'wrap' }}>
                            {alert.description}
                          </Typography>
                        }
                        sx={{ marginLeft: 1 }}
                      />
                      <Link to={`/reports/${alert.docId}`}>
                        <Tooltip
                          title='Report an incident'
                          arrow
                          placement='top'
                        >
                          <IconButton aria-label='report incident'>
                            <Task />
                          </IconButton>
                        </Tooltip>
                      </Link>
                      <Tooltip title='Dismiss alert' arrow placement='top'>
                        <IconButton
                          aria-label='dismiss'
                          onClick={() => handleDeleteAlert(alerts[index])}
                        >
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </ListItem>
                  </Fragment>
                ))}
            </List>
            {/* {isDesktop && ADD REPORTS LIST */}
          </Box>
        </Drawer>
      </ClickAwayListener>
      <Box sx={{ position: 'relative', width: 800, height: 600 }}>
        <img
          src='./cartoon-map.jpg'
          alt='cartoon map'
          style={{
            width: 800,
            height: 600,
            objectFit: 'contain',
            display: 'block',
          }}
        />
        {sensors &&
          sensors.map((marker) => (
            <Tooltip
              title={`${marker.sensorName}: ${stateDescriptions[marker.state]}`}
              arrow
              placement='top'
              key={marker.id}
            >
              <Marker
                key={marker.id}
                state={marker.state}
                coord={marker.coord}
              />
            </Tooltip>
          ))}
      </Box>
    </Box>
  );
}
