import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

// Font? (Lato)

const LoadingScreen = () => {
    return (
        <>
            <Box
                display={'flex'}
                direction="row"
                justifyContent="center"
                alignItems="center"
                // spacing={2}
                sx={{ bgcolor: '#F3ECB0', height: '100vh' }}>
                
                <CircularProgress color="success" />
                
                <Box >
                    <img
                        width={300}
                        height={300}
                        alt="complex" src="./Echo2EcoLogoLightBG.png" />
                </Box>

                <CircularProgress color="success" />
                
            </Box>
        </>
    );
}


export default LoadingScreen;