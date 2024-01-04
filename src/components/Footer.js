import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from "react-router-dom";

const navItems = ['Home', 'Our Work', 'Analytics', 'Sensors', 'Your Team'];
const navItemsPath = ['', 'ourwork', 'analytics', 'sensors', 'yourteam'];

const Footer = () => {
    return (
        <>
            <Box
                display={'flex'}
                direction="row"
                alignItems="center"
                sx={{ bgcolor: 'secondary.main', height: '20vh' }}>
                <Grid container
                    justifyContent="center"
                    xs={3}>
                    <img
                        width={150}
                        height={150}
                        alt="complex" src="./Echo2EcoLogoLightBG.png" />
                </Grid>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Grid container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    xs={9}>
                    {navItems.map((item, idx) => (
                        <Link key={idx.toString()} to={navItemsPath[idx]} style={{ textDecoration: 'none', color: "black" }}>
                            <Button key={item}>
                                <Typography color="#344D67">{item}</Typography>
                            </Button>
                        </Link>
                    ))}
                </Grid>
            </Box>
        </>
    );
}


export default Footer;