import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { GoogleMap, InfoWindowF, Marker, useJsApiLoader } from '@react-google-maps/api';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import InfoPopUp from './InfoPopUp';
import SelectSensor from './SelectSensor.js';

// import { useRecoilValue } from 'recoil';
// import { checkedSensorsAtom } from '../data/atoms';

const Maps = ({ alertsData, checkedSensors }) => {

    // const checkedSensors = useRecoilValue(checkedSensorsAtom);
    // const alertsData = useRecoilValue(alertsAtom);

    // Global variable: hours from now where sensor alerts are visible on map
    // const maxHourDiff = 30

    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const containerStyle = {
        width: '100vw',
        height: '100vh'
    };

    const center = {
        lat: 41.881832, lng: -87.623177
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API // API key here
    })

    const [map, setMap] = React.useState(null)

    // const onLoad = React.useCallback(function callback(map) {
    //     // Commented out below to allow for less zoom at load
    //     // const bounds = new window.google.maps.LatLngBounds(center);
    //     // map.fitBounds(bounds);

    //     setMap(map)
    // }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    // Note: Alerts only display LATEST alert for EACH sensor, 
    // only within the past six hours.


    function valuetext(value) {
        return `${value} hours`;
    }

    const [value, setValue] = React.useState([0, 6]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Gets current time 
    const currTimestamp = new Date().toISOString()

    function recentAlerts() {

        // Allows us to easily find whether we have already have a sensor or not

        // if("sensor 1" in uniqueSensorAlerts) {
        //     console.log("EXISTS!")
        // }

        const resultsObject = {}
        for (let i = 0; i < alertsData.length; i++) {
            if (alertsData[i].sensorName in resultsObject) {
                if (resultsObject[alertsData[i].sensorName].moreInfo.timestamp < alertsData[i].moreInfo.timestamp) {
                    resultsObject[alertsData[i].sensorName] = alertsData[i]
                }
            } else {
                resultsObject[alertsData[i].sensorName] = alertsData[i]
            }
        }

        // console.log(resultsObject)

        //update resultsObject to be an array
        let results = Object.keys(resultsObject).map((key) => {
            return resultsObject[key]
        })
        // ------ filter by time layers (by variable maxHourDiff hours) ------
        results = results.filter((alert) => {
            const alertTimestamp = new Date(alert.moreInfo.timestamp).getTime()
            const currTimestamp = new Date().getTime()
            const diff = currTimestamp - alertTimestamp
            const diffInHours = diff / (1000 * 60 * 60)
            return value[0] <= diffInHours && diffInHours <= value[1]
        })

        // console.log(results)

        return results
    }


    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={5}
            // onLoad={onLoad}
            onUnmount={onUnmount}
        >

            <Box style={{
                position: 'absolute',
                top: 100,
                left: 50,
                width: 300,
                height: "50vh",
                overflow: 'scroll'
            }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Settings</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Choose time range (in hours)</Typography>
                        <Slider
                            getAriaLabel={() => 'Time range (hrs)'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                        />
                    </AccordionDetails>
                    <Divider variant="middle" />
                    <AccordionDetails>
                        <Typography>Select Sensor(s)</Typography>
                        <SelectSensor />
                    </AccordionDetails>
                </Accordion>

            </Box>

            {recentAlerts()
                .filter((item) => checkedSensors.includes(item.sensorName))
                .map((alert) => (
                    <Marker
                        key={alert.id}
                        position={{ lat: alert.latitude, lng: alert.longitude }}
                        onClick={() => handleActiveMarker(alert.id)}

                        icon={alert.form ? parseInt(alert.form.dangerLevel) === 0 ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png" :
                            parseInt(alert.form.dangerLevel) === 1 ? "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png" :
                                parseInt(alert.form.dangerLevel) === 2 ? "http://maps.google.com/mapfiles/ms/icons/orange-dot.png" :
                                    "http://maps.google.com/mapfiles/ms/icons/red-dot.png" : "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                        }
                    >
                        {activeMarker === alert.id ? (
                            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                                <InfoPopUp
                                    lat={alert.latitude}
                                    lng={alert.longitude}
                                    name={alert.sensorName}
                                    species={alert.species}
                                    timestamp={alert.moreInfo.timestamp}
                                    desc={alert.moreInfo.description}
                                    alert={alert}
                                >
                                </InfoPopUp>
                            </InfoWindowF>
                        ) : null}
                    </Marker>
                ))
            }
            <></>
            <ToastContainer />

        </GoogleMap >
    ) : <></>
}


export default Maps;