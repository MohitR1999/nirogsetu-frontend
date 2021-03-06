import './App.css';
import { useDispatch } from 'react-redux';
import * as ActionCreators from './config/actionCreators';
import NirogHeader from './components/NirogHeader/NirogHeader';
import TotalTally from './components/TotalTally/TotalTally';
import StatewiseTally from './components/StatewiseTally/StatewiseTally';
import DetailCard from './components/DetailCard/DetailCard';
import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import { Backdrop } from '@mui/material';

function App() {

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  }

  const handleToggle = () => {
    setOpen(!open);
  }

  useEffect(() => {
    dispatch(ActionCreators.fetchDataThunk());
    dispatch(ActionCreators.fetchVaccinationDataThunk());
  }, []);

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default', height: '100%' }}>
      <NirogHeader />
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TotalTally />
            </Grid>
            <Grid item xs={12}>
              <StatewiseTally handleClose={handleClose} handleToggle={handleToggle} />
              <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
              >
                <DetailCard />
              </Backdrop>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
