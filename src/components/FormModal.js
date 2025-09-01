import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

import { db } from '../lib/firebaseConfig';

import 'react-toastify/dist/ReactToastify.css';

// Import your Firebase config from firebaseConfig.js

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%', // Make the modal responsive
    maxWidth: '450px', // Set a maximum width
    bgcolor: 'white', // Background color
    boxShadow: 24,
    p: 4,
};


const buttonStyle = {
    marginTop: 2,
};
const FormModal = ({ open, onClose, onSuccessClose, onFailClose, documentId }) => {
    const [dangerLevel, setDangerLevel] = useState('');
    const [animalType, setAnimalType] = useState('');
    const [animalCount, setAnimalCount] = useState('');
    const [description, setDescription] = useState('');
    const [reporterName, setReporterName] = useState('');
    //get current screen width size
    useEffect(() => {
        if (open) {
            // Check if the "form" field exists in the document
            const fetchData = async () => {
                try {
                    const alertRef = doc(db, 'alerts', documentId); // Replace 'your_alert_document_id' with the actual document ID
                    const docSnap = await getDoc(alertRef);
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        if (data.form) {
                            // "form" field exists, populate form fields with its values
                            const { dangerLevel, animalType, animalCount, description, reporterName } = data.form;
                            setDangerLevel(dangerLevel);
                            setAnimalType(animalType);
                            setAnimalCount(animalCount);
                            setDescription(description);
                            setReporterName(reporterName);
                        }
                    }
                } catch (error) {
                    console.error('Error fetching document data:', error);
                }
            };

            fetchData();
        }
    }, [open, documentId]);




    const handleSubmit = async () => {
        // Create a data object with the form values
        const formData = {
            dangerLevel: parseInt(dangerLevel),
            animalType,
            animalCount: parseInt(animalCount),
            description,
            reporterName,
        };

        try {
            // Find the correct ID of the alert document and update it with the new data
            const alertRef = doc(db, 'alerts', documentId); // Replace 'your_alert_document_id' with the actual document ID
            await updateDoc(alertRef, { form: formData });
            // Close the modal after a successful update
            onSuccessClose();
        } catch (error) {
            console.error('Error updating document:', error);
            onFailClose();

        }
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="incident-modal-title"
            aria-describedby="incident-modal-description"
        >
            <Box sx={modalStyle}>
                <h2 id="incident-modal-title">Report an Incident</h2>
                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',

                }}>
                    <TextField
                        fullWidth
                        label="Danger Level (0 - 3)"
                        type="number"
                        value={dangerLevel}
                        onChange={(e) => setDangerLevel(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Animal Type"
                        value={animalType}
                        onChange={(e) => setAnimalType(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Animal Count"
                        type="number"
                        value={animalCount}
                        onChange={(e) => setAnimalCount(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="General Description"
                        multiline
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Reporter Name"
                        value={reporterName}
                        onChange={(e) => setReporterName(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        sx={buttonStyle}
                    >
                        Submit
                    </Button>
                </form>
            </Box>

        </Modal >
    );
};

export default FormModal;
