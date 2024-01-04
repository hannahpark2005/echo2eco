import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  styled,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebaseConfig';
import { useRecoilState } from 'recoil';
import { loadingStateAtom } from '../../data/atoms';

const buttonStyle = {
  marginTop: 2,
  width: 150,
  alignSelf: 'flex-end',
};

const ReportForm = ({ alertData, onSubmitSuccess, onSubmitError }) => {
  const [sensorName, setSensorName] = useState('');
  const [dangerLevel, setDangerLevel] = useState('');
  const [alertTimestamp, setAlertTimestamp] = useState('');
  const [sensorLocation, setSensorLocation] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [animalCount, setAnimalCount] = useState('');
  const [description, setDescription] = useState('');
  const [reporterName, setReporterName] = useState('');

  const [isLoading, setIsLoading] = useRecoilState(loadingStateAtom);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));

  const resetTextFields = () => {
    setSensorName('');
    setDangerLevel('');
    setAlertTimestamp('');
    setSensorLocation('');
    setAnimalCount('');
    setAnimalType('');
    setDescription('');
    setReporterName('');
  };

  const handleSubmit = async () => {
    if (!alertData) return;

    // Create a data object with the form values
    const formData = {
      dangerLevel: parseInt(dangerLevel),
      animalType,
      animalCount: parseInt(animalCount),
      description,
      reporterName,
    };

    try {
      setIsLoading(true);
      const alertRef = doc(db, 'alerts', alertData.docId);
      await updateDoc(alertRef, { report: formData });
      resetTextFields();
      // onSubmitSuccess();
    } catch (error) {
      console.error('Error updating document:', error);
      // onSubmitError();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    if (alertData) {
      console.log(alertData);
      const { sensorName, dangerLevel, timestamp, species, coord } = alertData;
      setSensorName(sensorName);
      setDangerLevel(dangerLevel);
      setAlertTimestamp(timestamp);
      setAnimalType(species);
      setSensorLocation(coord);
    }
    setIsLoading(false);
  }, [alertData, setIsLoading]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Typography variant='h4'>Report an Incident</Typography>
      <FormControl fullWidth>
        <Typography marginBottom={1}>Sensor Information</Typography>
        <HStack>
          <TextField
            label='Sensor Name'
            value={sensorName}
            disabled={!!alertData}
            size={isMobile ? 'small' : 'medium'}
            onChange={(e) => setSensorName(e.target.value)}
            style={{ flex: 1 }}
          />
          <TextField
            label='Sensor Location'
            value={sensorLocation && `${sensorLocation.x}, ${sensorLocation.y}`}
            disabled={!!alertData}
            size={isMobile ? 'small' : 'medium'}
            onChange={(e) => setSensorLocation(e.target.value)}
            style={{ flex: 1 }}
          />
          <TextField
            label='Danger Level'
            type='number'
            value={dangerLevel}
            disabled={!!alertData}
            size={isMobile ? 'small' : 'medium'}
            onChange={(e) => setDangerLevel(e.target.value)}
            style={{ flex: 1 }}
          />
        </HStack>
        <Typography marginBottom={1}>Time Information</Typography>
        <HStack>
          <TextField
            label='Alert Time'
            value={
              alertTimestamp &&
              new Date(alertTimestamp).toLocaleString('en-US', {
                dateStyle: 'short',
                timeStyle: 'short',
              })
            }
            disabled={!!alertData}
            size={isMobile ? 'small' : 'medium'}
            onChange={(e) => setAlertTimestamp(e.target.value)}
            style={{ flex: 1 }}
          />
          <TextField
            label='Report Time'
            value={new Date(Date.now()).toLocaleString('en-US', {
              dateStyle: 'short',
              timeStyle: 'short',
            })}
            disabled
            size={isMobile ? 'small' : 'medium'}
            style={{ flex: 1 }}
          />
        </HStack>
        <Typography marginBottom={1}>Details</Typography>
        <HStack>
          <TextField
            label='Reporter Name'
            value={reporterName}
            size={isMobile ? 'small' : 'medium'}
            onChange={(e) => setReporterName(e.target.value)}
            style={{ flex: 1 }}
          />
          <TextField
            label='Animal Type'
            value={animalType}
            size={isMobile ? 'small' : 'medium'}
            onChange={(e) => setAnimalType(e.target.value)}
            style={{ flex: 1 }}
          />
          <TextField
            label='Animal Count'
            value={animalCount}
            type='number'
            size={isMobile ? 'small' : 'medium'}
            onChange={(e) => setAnimalCount(e.target.value)}
            style={{ flex: 1 }}
          />
        </HStack>
        <TextField
          label='Description'
          value={description}
          multiline
          rows={6}
          onChange={(e) => setDescription(e.target.value)}
          style={{ flex: 1 }}
        />
        <Button
          variant='contained'
          color='primary'
          onClick={handleSubmit}
          sx={buttonStyle}
        >
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default ReportForm;

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  width: '100%',
});

const HStack = styled(Box)({
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
  marginBottom: '1.5rem',
  width: '100%',
});
