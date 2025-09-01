import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useRecoilState } from 'recoil';

import { invokeNewFetchAtom } from '../data/atoms';
import FormModal from './FormModal';

export default function Row(props) {
    const { row, role, hover, tabIndex, key } = props;
    const [open, setOpen] = React.useState(false);
    const [invokeNewFetch, setInvokeNewFetch] = useRecoilState(invokeNewFetchAtom);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
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

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const onClose = () => {
        setIsModalOpen(false);
    }

    const onSuccessClose = () => {
        setIsModalOpen(false);
        toast.success('Form Reported! 🦄', {
            position: "bottom-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setInvokeNewFetch(!invokeNewFetch);

    };

    const onFailClose = () => {
        setIsModalOpen(false);
        toast.error('Form Submission Failed! 🦄', {
            position: "bottom-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };
    return (
        <React.Fragment>
            <StyledTableRow
                role={role}
                hover={hover}
                tabIndex={tabIndex}
                key={key}
                sx={{ '& > *': { borderBottom: 'unset' } }}>
                <StyledTableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                    {row.sensorName}
                </StyledTableCell>
                <StyledTableCell align="right">{row.latitude}</StyledTableCell>
                <StyledTableCell align="right">{row.longitude}</StyledTableCell>
                <StyledTableCell align="right">{row.species}</StyledTableCell>
                <StyledTableCell align="right">{row.form ?
                    <Button variant='outlined' onClick={openModal}>View</Button>
                    : <Button variant='outlined' onClick={openModal}>Report</Button>}
                </StyledTableCell>

                {/* <StyledTableCell align="right">{row.audio}</StyledTableCell> */}
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                More Info
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <StyledTableRow>
                                        <StyledTableCell>Image</StyledTableCell>
                                        <StyledTableCell>Timestamp</StyledTableCell>
                                        <StyledTableCell align="right">Description</StyledTableCell>
                                        <StyledTableCell align="right">Frequency</StyledTableCell>
                                        <StyledTableCell align="right">Decibel</StyledTableCell>
                                        <StyledTableCell align="right">Date Installed</StyledTableCell>
                                        {/* <StyledTableCell align="right">Battery</StyledTableCell> */}
                                    </StyledTableRow>
                                </TableHead>
                                <TableBody>
                                    {/* {row.moreInfo.map((moreInfoRow) => ( */}
                                    <StyledTableRow key={row.moreInfo.img}>
                                        <StyledTableCell component="th" scope="row">
                                            <img src={row.moreInfo.img} />
                                        </StyledTableCell>
                                        <StyledTableCell>{row.moreInfo.timestamp}</StyledTableCell>
                                        <StyledTableCell align="right">{row.moreInfo.description}</StyledTableCell>
                                        <StyledTableCell align="right">{row.moreInfo.frequency}</StyledTableCell>
                                        <StyledTableCell align="right">{row.moreInfo.decibel}</StyledTableCell>
                                        <StyledTableCell align="right">{row.moreInfo.dateInstalled}</StyledTableCell>
                                        {/* <StyledTableCell align="right">{row.moreInfo.battery}</StyledTableCell> */}
                                    </StyledTableRow>
                                    {/* ))} */}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </StyledTableCell>
            </StyledTableRow>
            <ToastContainer />

            <FormModal open={isModalOpen} onClose={onClose} onSuccessClose={onSuccessClose} onFailClose={onFailClose} documentId={
                row.docId
            } />

        </React.Fragment>
    );
}