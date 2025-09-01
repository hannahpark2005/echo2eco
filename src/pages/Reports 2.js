import { Box, useMediaQuery, useTheme } from '@mui/material';
import { ReportForm, CollapsibleTable } from '../components/Report';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { alertsAtom, sensorsAtom } from '../data/atoms.js';
import { useEffect, useState } from 'react';

const Reports = () => {
  const { docId } = useParams();
  const sensorData = useRecoilValue(sensorsAtom);
  const alertsScenarioData = useRecoilValue(alertsAtom);
  const [currentAlertReport, setCurrentAlertReport] = useState();

  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const maxWidth = muiTheme.breakpoints.values.lg;

  const createData = (data) => {
    if (!data) return;
    const groupedDataBySensor = data.reduce((acc, item) => {
      if (!acc[item.sensorName]) {
        acc[item.sensorName] = [];
      }
      acc[item.sensorName].push(item);
      return acc;
    }, {});

    const sortedKeys = Object.keys(groupedDataBySensor).sort(
      (a, b) => parseInt(a.split(' ')[1]) - parseInt(b.split(' ')[1])
    );
    const orderedGroupedDataBySensor = {};

    sortedKeys.forEach((key) => {
      orderedGroupedDataBySensor[key] = groupedDataBySensor[key];
    });
    return orderedGroupedDataBySensor;
  };

  const data = createData(alertsScenarioData.scenario4);

  useEffect(() => {
    if (docId) {
      const currentAlert = alertsScenarioData.scenario3.find(
        (alert) => alert.docId === docId
      );
      const sensor = sensorData.find((sensor) => sensor.id === currentAlert.id);
      const currentAlertReport = {
        ...currentAlert,
        coord: sensor.coord,
        docId,
      };

      setCurrentAlertReport(currentAlertReport);
    }
  }, [sensorData, alertsScenarioData, docId]);

  return (
    <Box
      paddingY={5}
      paddingX={isMobile ? 5 : 10}
      display='flex'
      flexDirection='column'
      gap={5}
      maxWidth={maxWidth}
      margin='0 auto'
    >
      <ReportForm alertData={currentAlertReport} />
      <CollapsibleTable data={data} />
    </Box>
  );
};

export default Reports;
