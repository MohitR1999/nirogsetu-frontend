import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import * as ActionCreators from './config/actionCreators';
import NirogHeader from './components/NirogHeader/NirogHeader';
import TotalTally from './components/TotalTally/TotalTally';
import StatewiseTally from './components/StatewiseTally/StatewiseTally';
import MapOfIndia from './components/MapOfIndia/MapOfIndia';
import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";

import { createTheme, ThemeProvider } from '@mui/material/styles';

export const themeOptions = {
  palette: {
    type: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
};

const theme = createTheme(themeOptions);

function App() {

  const statesData = useSelector(state => state.statesData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionCreators.fetchDataThunk());
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <NirogHeader />
      <ThemeProvider theme={theme}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TotalTally />
              </Grid>

              <Grid item xs={12}>
                <StatewiseTally />
              </Grid>
            </Grid>

          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <MapOfIndia />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
}

export default App;
