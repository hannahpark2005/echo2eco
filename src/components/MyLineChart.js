import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useRecoilValue } from 'recoil';

import { alertsAtom, checkedSensorsAtom } from '../data/atoms';

const MyLineChart = () => {
    const checkedSensors = useRecoilValue(checkedSensorsAtom);
    const alertsData = useRecoilValue(alertsAtom);

    console.log(checkedSensors)
    // Transform the data to aggregate alert amounts for each sensor at each timestamp
    const transformedData = {};

    alertsData.forEach(alert => {
        const timestamp = alert.moreInfo.timestamp;

        if (!transformedData[timestamp]) {
            transformedData[timestamp] = { timestamp };
        }

        checkedSensors.forEach(sensor => {
            if (!transformedData[timestamp][sensor]) {
                transformedData[timestamp][sensor] = 0;
            }
            transformedData[timestamp][sensor] += (alert.sensorName === sensor) ? 1 : 0;
        });
    });

    const data = Object.values(transformedData);

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="timestamp"
                    tickCount={data.length} // Number of ticks equal to the number of data points
                    tickFormatter={(timestamp) => new Date(timestamp).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                {checkedSensors.map((sensor, index) => (
                    <Line
                        key={index}
                        type="monotone"
                        dataKey={sensor}
                        stroke={getRandomColor()}
                        activeDot={{ r: 8 }}
                    />
                ))}
            </LineChart>
        </ResponsiveContainer>
    );
};

export default MyLineChart;