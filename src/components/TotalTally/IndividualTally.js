import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";


const IndividualTally = (props) => {
  
  let color = '#242424';
  if (props.label === 'Total Cases') {
    color = 'rgba(255, 255, 69, 0.5)';
  } else if (props.label === 'Total Recovered') {
    color = 'rgba(69, 255, 69, 0.5)';
  } else if (props.label === 'Total Deaths') {
    color = 'rgba(255, 69, 69, 0.5)';
  }

  return (
    <Grid item xs={12} sm={4} md={4} lg={4}>
      <Card sx={{ bgcolor : color}}>
        <CardActionArea>
          <CardContent>
            <Typography sx={{ mt: 2 }} variant="h4" component="div" align='center'>
              {props.count}
            </Typography>
            <Typography sx={{ mb: 2 }} color="text.secondary" align='center'>
              {props.label}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default IndividualTally;