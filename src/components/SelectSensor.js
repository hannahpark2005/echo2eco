// import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { checkedSensorsAtom, sensorsAtom } from '../data/atoms';

export default function SelectSensor() {

  const sensorsData = useRecoilValue(sensorsAtom);
  const [checked, setChecked] = useRecoilState(checkedSensorsAtom);

  const handleToggle = (sensor) => {
    if (!checked.includes(sensor)) {
      setChecked([...checked, sensor]);
    } else {
      setChecked(checked.filter((item) => item !== sensor));
    }
  };

  return (
    <List sx={{
      width: '100%',
      backgroundColor: 'white'
    }}>
      {sensorsData.map((sensor) => {
        const labelId = `checkbox-list-label-${sensor.name}`;

        return (
          <ListItem
            key={sensor.name}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={() => { handleToggle(sensor.name) }} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(sensor.name) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${sensor.name}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}