import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Collapse,
  Typography,
  Box,
  styled,
  tableCellClasses,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Row = (props) => {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <StyledTableCell>
          <IconButton size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell>{row[0].sensorName}</StyledTableCell>
        <StyledTableCell align='right'>{row.length}</StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Table size='small' aria-label='alerts'>
              <TableHead>
                <TableRow>
                  <TableCell>Timestamp</TableCell>
                  <TableCell align='right'>Danger Level</TableCell>
                  <TableCell align='right'>Species</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.map((alert) => (
                  <StyledTableRow key={alert.timestamp}>
                    <StyledTableCell>
                      {new Date(alert.timestamp).toLocaleString('en-US', {
                        dateStyle: 'short',
                        timeStyle: 'short',
                      })}
                    </StyledTableCell>
                    <StyledTableCell align='right'>
                      {alert.dangerLevel}
                    </StyledTableCell>
                    <StyledTableCell align='right'>
                      {alert.species}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </Collapse>
        </StyledTableCell>
      </TableRow>
    </React.Fragment>
  );
};

const CollapsibleTable = ({ data }) => {
  return (
    <Box>
      <Typography variant='h4' marginBottom={3}>
        Reports by Sensor
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <StyledTableCell />
              <StyledTableCell>Sensor Name</StyledTableCell>
              <StyledTableCell align='right'>Number of Alerts</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              Object.entries(data).map(([sensorName, alerts]) => (
                <Row key={sensorName} row={alerts} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CollapsibleTable;
