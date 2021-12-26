import './App.css';
import { Grommet, Box, Grid} from 'grommet';
import { useSelector, useDispatch } from 'react-redux';
import * as ActionCreators from './config/actionCreators';
import NirogHeader from './components/NirogHeader/NirogHeader';
import TotalTally from './components/TotalTally/TotalTally';
import StatewiseTally from './components/StatewiseTally/StatewiseTally';
import MapOfIndia from './components/MapOfIndia/MapOfIndia';

const theme = {
  global: {
    font: {
      family: 'Source Code Pro',
      size: '18px',
      height: '20px'
    }
  }
}

function App() {

    const statesData = useSelector(state => state.statesData.data);
    const dispatch = useDispatch();

  return (
    <Grommet theme={theme}>
      <Grid
        fill
        rows={['auto', 'auto']}
        columns={['flex', 'flex']}
        areas={[
          { name: 'header', start: [0, 0], end: [1, 0] },
          { name: 'tally', start: [0, 1], end: [0, 1] },
          { name: 'map', start: [1, 1], end: [1, 1] },
        ]}
      >
        <Box gridArea="header" background="dark-1">
          <NirogHeader/>
        </Box>
        <Box gridArea="tally" background="dark-1">
          <TotalTally statesData={statesData}/>
          <StatewiseTally statesData={statesData}/>
        </Box>
        <Box gridArea="map" background="dark-1">
          <MapOfIndia />
        </Box>
      </Grid>
    </Grommet>
  );
}

export default App;
