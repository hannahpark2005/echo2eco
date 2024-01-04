import { useRecoilValue } from 'recoil';
import { alertsAtom } from '../../data/atoms';
import { Typography } from '@mui/material';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

export default function IncidentsBySensorChart() {
  const alertsScenarioData = useRecoilValue(alertsAtom);

  const aggregateData = (data) => {
    const aggregatedData = {};

    data.forEach((entry) => {
      if (!aggregatedData[entry.sensorName]) {
        aggregatedData[entry.sensorName] = {
          sensorName: entry.sensorName,
          count: 0,
        };
      }
      aggregatedData[entry.sensorName].count++;
    });
    /**
     * {
     *  sensor1: {
     *    sensorName: sensor1,
     *    count: 1
     * }
     *
     * }
     */
    return Object.values(aggregatedData).sort(
      (a, b) =>
        parseInt(a.sensorName.split(' ')[1]) -
        parseInt(b.sensorName.split(' ')[1])
    );
  };

  const transformedData = aggregateData(alertsScenarioData.scenario4);

  return (
    <>
      <Typography variant='h5' marginBottom={1}>
        Number Of Incidents By Sensor
      </Typography>
      <ResponsiveContainer width='100%' height={400}>
        <BarChart
          data={transformedData}
          margin={{
            top: 15,
            right: 50,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='sensorName'
            tickFormatter={(sensorName) => sensorName.split(' ')[1]}
            height={60}
            label={{ value: 'Sensor #', position: 'insideBottom' }}
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey='count' fill='#FF7B54' />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
