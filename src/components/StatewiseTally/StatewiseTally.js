import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchDataThunk } from '../../config/actionCreators';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Grid } from '@mui/material';
import * as ActionCreators from '../../config/actionCreators';

const columns = [
    { field: 'name', headerName: 'State', flex : 4, minWidth: 150 ,description : 'Name of the state' },
    { field: 'total_active', headerName: 'Total Active Cases', flex : 1, minWidth: 150 ,  description : 'Total Active Cases in the state' },
    { field: 'total_cured', headerName: 'Total Recovered', flex : 1,minWidth: 150 , description : 'Total Recovered people in the state' },
    { field: 'total_deaths', headerName: 'Total Deaths', flex : 1, minWidth: 150 ,description : 'Total Deaths reported in the state' },
];

const StatewiseTally = (props) => {

    const statesData = useSelector(state => state.statesData.data);
    const dispatch = useDispatch();

    return (
        <Grid container sx={{p : 2}}>
        <div style={{ height: 600, width: '100%' }}>
            <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ flexGrow: 1 }}>
                    <DataGrid 
                    rows={statesData} 
                    columns={columns}
                    onCellClick={(params, event) => {
                        console.log('Cell clicked!');
                        dispatch(ActionCreators.updateSelectedState(params.row));
                        props.handleToggle();
                    }}
                    />
                </div>
            </div>
        </div>
        </Grid>
    );
}

export default StatewiseTally;