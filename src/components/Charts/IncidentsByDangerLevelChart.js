import { useRecoilValue } from 'recoil';
import { alertsAtom } from '../../data/atoms';
import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useState } from 'react';

const speciesType = ['elephant', 'rhino', 'lion', 'zebra'];

export default function IncidentsByDangerLevelChart() {
  const alertsScenarioData = useRecoilValue(alertsAtom);
  const [selectedSpecies, setSelectedSpecies] = useState(speciesType[0]);

  const handleChangeSpecies = (e) => {
    setSelectedSpecies(e.target.value);
  };

  // Transform data for stacked bar chart
  const aggregateData = (data) => {
    const aggregatedData = {};

    data.forEach((entry) => {
      const date = new Date(entry.timestamp).toLocaleDateString();
      const { species, dangerLevel } = entry;

      if (!aggregatedData[date]) {
        aggregatedData[date] = {};
      }

      // {
      //   "10/2/2023": {
      //     "elephant": {
      //       1: 0,
      //       2: 1,
      //       3: 0,
      //     },
      //     "rhino": {
      //       1: 0,
      //       2: 0,
      //       3: 0,
      //     }
      //   }
      // }

      if (!aggregatedData[date][species]) {
        aggregatedData[date][species] = {
          1: 0,
          2: 0,
          3: 0,
        };
      }

      aggregatedData[date][species][dangerLevel]++;
    });

    const sortedData = Object.entries(aggregatedData)
      .sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB))
      .map(([date, speciesData]) => ({
        date,
        ...speciesData,
      }));

    return sortedData;
  };

  const transformedData = aggregateData(alertsScenarioData.scenario4);

  return (
    <>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        marginBottom={3}
      >
        <Box>
          <Typography variant='h5'>Incidents by Level of Danger</Typography>
          <Typography
            component='span'
            variant='subtitle1'
            color='GrayText'
            marginRight={3}
          >
            Level 2: Warning
          </Typography>
          <Typography component='span' variant='subtitle1' color='GrayText'>
            Level 3: Danger
          </Typography>
        </Box>
        <FormControl size='small' sx={{ minWidth: 150, marginLeft: 3 }}>
          <Select
            value={selectedSpecies}
            onChange={handleChangeSpecies}
            displayEmpty
          >
            {speciesType.map((species) => (
              <MenuItem value={species}>
                {species.charAt(0).toUpperCase() + species.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <ResponsiveContainer width='100%' height={400}>
        <BarChart
          data={transformedData.slice(0, 31)}
          margin={{
            top: 15,
            right: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey={`${selectedSpecies}.2`}
            fill={getBarColor(selectedSpecies, 2)}
            stackId={selectedSpecies}
            name='DangerLevel 2'
          />
          <Bar
            dataKey={`${selectedSpecies}.3`}
            fill={getBarColor(selectedSpecies, 3)}
            stackId={selectedSpecies}
            name='DangerLevel 3'
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

// This function assigns a color based on species and danger level.
function getBarColor(species, dangerLevel) {
  const colorsBySpecies = {
    elephant: ['#83a1c0', '#83a1c0', '#344d67'],
    rhino: ['#ddebd5', '#90bf77', '#6e8561'],
    lion: ['#ffc6b5', '#ff7b54', '#ee5628'],
    zebra: ['#f8f2b6', '#f2e575', '#d2c440'],
  };
  return colorsBySpecies[species][dangerLevel - 1];
}
