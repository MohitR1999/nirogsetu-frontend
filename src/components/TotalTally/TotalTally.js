import React from "react";
import Grid from "@mui/material/Grid";
import IndividualTally  from "./IndividualTally";
import { useSelector } from "react-redux";

const TotalTally = (props) => {
    
    const totalCasesLabel = "Total Cases";
    const recoveredCasesLabel = "Total Recovered";
    const deathCasesLabel = "Total Deaths";
    const totalVaccinatedLabel = "Total Vaccinated";
    
    let totalCases = 0;
    let recoveredCases = 0;
    let deathCases = 0;
    
    const data = useSelector(state => state.statesData.data);
    const totalVaccinated = useSelector(state => state.totalVaccinated);
     

    if (data) {
        const formatter = new Intl.NumberFormat('en-IN');
        data.forEach(s => {
            totalCases += Number.parseInt(s.total_active);
            recoveredCases += Number.parseInt(s.total_cured);
            deathCases += Number.parseInt(s.total_deaths);
        });
        totalCases = formatter.format(totalCases);
        recoveredCases = formatter.format(recoveredCases);
        deathCases = formatter.format(deathCases);
    }

    return (
        <Grid container spacing={2} columnSpacing={2} sx={{p : 2}}>
            <IndividualTally label={totalCasesLabel} count={totalCases}/>
            <IndividualTally label={recoveredCasesLabel} count={recoveredCases}/>
            <IndividualTally label={deathCasesLabel} count={deathCases}/>
            <IndividualTally label={totalVaccinatedLabel} count={totalVaccinated ? totalVaccinated : 0}/>
        </Grid>
    );
}

export default TotalTally;