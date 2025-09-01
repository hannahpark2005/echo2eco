import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { useRecoilValue } from 'recoil';
import { alertsAtom } from '../../data/atoms';
import { Typography } from '@mui/material';

const COLORS = ['#344D67', '#90BF7A', '#FF7B54', '#F2E575', '#a4a4a4'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='#fff'
      textAnchor='middle'
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function IncidentsBySpeciesChart() {
  const alertsScenarioData = useRecoilValue(alertsAtom);

  const transformedData = {};

  alertsScenarioData.scenario4.forEach((alert) => {
    const species = alert.species;

    if (!transformedData[species]) {
      transformedData[species] = 1;
    } else {
      transformedData[species] += 1;
    }
  });

  // Object.keys takes in transformedData and makes an array of keys (species)
  const data = Object.keys(transformedData).map((key) => {
    const capitalizedName = !!key
      ? key.charAt(0).toUpperCase() + key.slice(1)
      : 'Other';
    return {
      name: capitalizedName,
      value: transformedData[key],
    };
  });

  return (
    <>
      <Typography variant='h5' marginBottom={1}>
        Number Of Incidents By Species
      </Typography>
      <ResponsiveContainer width='100%' height={400}>
        <PieChart>
          <Legend
            verticalAlign='middle'
            align='left'
            layout='vertical'
            iconType='circle'
          />
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={130}
            fill='#8884d8'
            dataKey='value'
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}
