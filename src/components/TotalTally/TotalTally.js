import { Box } from "grommet";
import React from "react";
import IndividualTally  from "./IndividualTally";

const TotalTally = (props) => {
    
    const totalCasesLabel = "Total Cases";
    const recoveredCasesLabel = "Total Recovered";
    const deathCasesLabel = "Total Deaths";
    
    let totalCases = 0;
    let recoveredCases = 0;
    let deathCases = 0;

    props.statesData.forEach(s => {
        totalCases += Number.parseInt(s.total_active);
        recoveredCases += Number.parseInt(s.total_cured);
        deathCases += Number.parseInt(s.total_deaths);
    });

    return (
        <Box direction="row"
        pad="small"
        >
            <Box pad={"small"} basis="full">
                <IndividualTally label={totalCasesLabel} count={totalCases} background="status-critical"/>
            </Box>
            <Box pad={"small"} basis="full">
                <IndividualTally label={recoveredCasesLabel} count={recoveredCases} background="accent-1"/>
            </Box>
            <Box pad={"small"} basis="full">
                <IndividualTally label={deathCasesLabel} count={deathCases} background="status-unknown"/>
            </Box>
        </Box>
    );
}

export default TotalTally;