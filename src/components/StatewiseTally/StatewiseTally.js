import React, { useState } from "react";
import { DataTable, Box, Text, Button } from 'grommet';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchDataThunk } from '../../config/actionCreators';

const StatewiseTally = (props) => {
    
    const dispatch = useDispatch();

    return (
        <Box pad={"small"}>
            <DataTable
                columns={[
                    {
                        property: 'name',
                        header: <Text>State</Text>,
                        primary: true,
                    },
                    {
                        property: 'total_active',
                        header: <Text color={'status-critical'}>Total Cases</Text>,
                    },{
                        property: 'total_cured',
                        header: <Text color={'accent-1'}>Total Recovered</Text>,
                    },{
                        property: 'total_deaths',
                        header: <Text color={'status-unknown'}>Total Deceased</Text>,
                    },
                ]}
                data={props.statesData}
            />
            <Button label="Fetch Data" onClick={() => {
                console.log("Clicked")
                dispatch(fetchDataThunk())
            }}/>
        </Box>
    );
}

export default StatewiseTally;