import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";


const IndividualTally = (props) => {
  return (
    <Grid item xs={12} sm={4} md={4} lg={4}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography sx={{ mt: 2 }} variant="h5" component="div" align='center'>
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