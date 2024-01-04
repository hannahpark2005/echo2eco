import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import React from 'react';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';

import { invokeNewFetchAtom } from '../data/atoms';
import FormModal from './FormModal';

const InfoPopUp = ({ lat, lng, species, name, timestamp, desc, alert }) => {


    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [invokeNewFetch, setInvokeNewFetch] = useRecoilState(invokeNewFetchAtom);
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
        <>
            <Paper elevation={3} sx={{ padding: 2 }}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell width={250}>
                                <Typography variant='h5'>{name}</Typography>
                                <Typography variant='body2'>Latitude: {lat}</Typography>
                                <Typography variant='body2'>Longitude: {lng}</Typography>
                                <Typography variant='body2'>Species: {species}</Typography>
                                <Typography variant='body2'>Description: {desc}</Typography>
                            </TableCell>
                            <TableCell width={250}>
                                <Typography variant='body2'>Time: {timestamp}</Typography>
                                <Button variant='outlined' onClick={openModal} size='small' sx={{ paddingTop: 0, paddingBottom: 0 }}>
                                    {alert.form ? 'View' : 'Report'}
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
            <FormModal open={isModalOpen} onClose={onClose} onSuccessClose={onSuccessClose} onFailClose={onFailClose} documentId={
                alert.docId
            } />
        </>

    )
}

export default InfoPopUp;
