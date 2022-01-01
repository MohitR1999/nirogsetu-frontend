import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import * as ActionCreators from './config/actionCreators';
import NirogHeader from './components/NirogHeader/NirogHeader';
import TotalTally from './components/TotalTally/TotalTally';
import StatewiseTally from './components/StatewiseTally/StatewiseTally';
import MapOfIndia from './components/MapOfIndia/MapOfIndia';
import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import ReactTooltip from 'react-tooltip';

function App() {

  const statesData = useSelector(state => state.statesData.data);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  useEffect(() => {
    dispatch(ActionCreators.fetchDataThunk());
  }, []);

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default', height : '100%' }}>
      <NirogHeader />
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TotalTally />
            </Grid>
            <Grid item xs={12}>
              <StatewiseTally />
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid item xs={12} sm={12} md={6} lg={6}>
          <MapOfIndia setToolTipContent={setContent}/>
          <ReactTooltip>{content}</ReactTooltip>
        </Grid> */}
      </Grid>
    </Box>
  );
}

export default App;
