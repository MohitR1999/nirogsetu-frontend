import React from "react";
import { Backdrop, CircularProgress, Card, CardContent, Typography, CardActions, Button, CardHeader, Avatar } from '@mui/material';
import { red } from '@mui/material/colors';
import { useSelector } from 'react-redux';

const DetailCard = (props) => {
    const stateData = useSelector(state => state.selectedStateData);
    const formatter = new Intl.NumberFormat('en-IN');
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: '#f44336' }} aria-label="recipe">
                            {stateData.name ? stateData.name[0] : ""}
                        </Avatar>
                    }
                    title={stateData.name ? stateData.name : ""}
                />
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    Total Active Cases
                </Typography>
                <Typography variant="h5" component="div" gutterBottom>
                    {formatter.format(stateData ? Number.parseInt(stateData.total_active) : 0)}
                </Typography>

                <Typography sx={{ fontSize: 14 }} color="text.secondary" >
                    Total Recovered Cases
                </Typography>
                <Typography variant="h5" component="div" gutterBottom>
                    {formatter.format(stateData ? Number.parseInt(stateData.total_cured) : 0)}
                </Typography>

                <Typography sx={{ fontSize: 14 }} color="text.secondary" >
                    Total Deaths
                </Typography>
                <Typography variant="h5" component="div" gutterBottom>
                    {formatter.format(stateData ? Number.parseInt(stateData.total_deaths) : 0)}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default DetailCard;