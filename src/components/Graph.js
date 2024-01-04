import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const Graph = ({ action, children }) => {
    return (
        // Removed: minHeight: 300, minWidth: 400 to allow for responsivity
        <Card sx={{ backgroundColor: '#344D67' }}>
            <CardContent>
                {children}
            </CardContent>
            {/* <CardActions>
                {action}
            </CardActions> */}
        </Card>
    )
}

export default Graph;

