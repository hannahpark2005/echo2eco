import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <Typography variant='h6'>
      {date.toLocaleString('en-US', {
        timeStyle: 'short',
        dateStyle: 'medium',
      })}
    </Typography>
  );
}
