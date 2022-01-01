import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Card, CardContent } from '@mui/material';

import India from './India.json';
import ReactTooltip from 'react-tooltip';

const MapOfIndia = ({setToolTipContent}) => {
    return (
        <Card sx={{ m: 2 }}>
            <CardContent>
                    <ComposableMap data-tip="" projection="geoMercator" width={500} height={400}>
                        <Geographies geography={India}>
                            {({ geographies }) =>
                                geographies.map(geo => <Geography
                                     key={geo.rsmKey} 
                                     geography={geo} 
                                     onMouseEnter={() => {
                                         setToolTipContent(`${geo.properties.NAME_1}`);
                                     }}
                                     onMouseLeave={() => {
                                         setToolTipContent("");
                                     }}
                                     style={{
                                    default: {
                                        fill: "#25CCF7",
                                        stroke: "#607D8B",
                                        strokeWidth: 0.75,
                                        outline: "none",
                                    },
                                    hover: {
                                        fill: "#1B9CFC",
                                        stroke: "#607D8B",
                                        strokeWidth: 1,
                                        outline: "none",
                                    },
                                    pressed : {
                                        fill: "#1B9CFC",
                                        stroke: "#607D8B",
                                        strokeWidth: 1,
                                        outline: "none",
                                    }
                                }} />)
                            }
                        </Geographies>
                    </ComposableMap>
            </CardContent>
        </Card>
    );
}

export default MapOfIndia;