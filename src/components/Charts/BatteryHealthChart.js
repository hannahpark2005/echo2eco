import { useRecoilValue } from 'recoil';
import { sensorsAtom } from '../../data/atoms';
import { Box, Pagination, Typography, useMediaQuery } from '@mui/material';
import { Cell, Text, PieChart, Pie, Label } from 'recharts';
import { useState } from 'react';
import { useTheme } from '@emotion/react';

export default function BatteryHealthChart() {
  const sensorsData = useRecoilValue(sensorsAtom);
  const [page, setPage] = useState(1);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.between('sm', 'lg'));

  const ITEMS_PER_PAGE = isMobile ? 2 : isTablet ? 3 : 4;

  const handleChange = (_, value) => setPage(value);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  const currentPageData = sensorsData.slice(start, end);

  const getColor = (health) => {
    if (health <= 20) return '#FF7B54';
    if (health >= 21 && health <= 60) return '#F2E575';
    return '#90BF7A';
  };

  const CustomLabel = ({ viewBox, value, name }) => {
    // x, y coordinates of center of circle
    const { cx, cy } = viewBox;

    return (
      <>
        <Text
          x={cx}
          y={cy - 15}
          dy={8}
          textAnchor='middle'
          verticalAnchor='middle'
          fill='#333'
        >
          {name}
        </Text>
        <Text
          x={cx}
          y={cy + 10}
          dy={8}
          textAnchor='middle'
          verticalAnchor='middle'
          fill='#333'
        >
          {`${value}%`}
        </Text>
      </>
    );
  };

  return (
    <>
      <Box display='flex' gap={3}>
        <Typography variant='h5' marginBottom={1}>
          Sensor Battery Health
        </Typography>
        <Legend />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {currentPageData.map((sensor) => (
          <PieChart width={200} height={200} key={sensor.sensorName}>
            <Pie
              data={[
                { value: sensor.health, name: sensor.sensorName },
                { value: 100 - sensor.health },
              ]}
              dataKey='value'
              nameKey='name'
              cx='50%'
              cy='50%'
              innerRadius={60}
              outerRadius={80}
              fill={getColor(sensor.health)}
              labelLine={false}
            >
              <Label
                content={
                  <CustomLabel
                    viewbox={{ cx: 100, cy: 100 }}
                    value={sensor.health}
                    name={sensor.sensorName}
                  />
                }
              />
              <Cell fill={getColor(sensor.health)} />
              <Cell fill='#eee' />
            </Pie>
          </PieChart>
        ))}
      </Box>
      <Pagination
        count={Math.ceil(sensorsData.length / ITEMS_PER_PAGE)}
        page={page}
        onChange={handleChange}
        color='primary'
        style={{
          marginTop: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </>
  );
}

const Legend = () => {
  return (
    <Box display='flex' alignItems='center' justifyContent='start' gap={2}>
      <Box display='flex' alignItems='center' gap={1}>
        <Box bgcolor='#90BF7A' width={10} height={10} borderRadius='50%' />
        <Typography variant='body2'>Full Battery</Typography>
      </Box>
      <Box display='flex' alignItems='center' gap={1}>
        <Box bgcolor='#F2E575' width={10} height={10} borderRadius='50%' />
        <Typography variant='body2'>Medium Battery</Typography>
      </Box>
      <Box display='flex' alignItems='center' gap={1}>
        <Box bgcolor='#FF7B54' width={10} height={10} borderRadius='50%' />
        <Typography variant='body2'>Low Battery</Typography>
      </Box>
    </Box>
  );
};
