import React from "react";
import { Box, Heading } from 'grommet';


const IndividualTally = (props) => {
    return (
            <Box
                direction="column"
                pad="small"
                align="center"
                alignSelf="center"
                basis="full"
            >
                <Box pad="small">
                    <Heading level={3} color={props.background}>
                        {props.count}
                    </Heading>
                </Box>
                <Box>
                    <Heading level={5} color={props.background}>
                        {props.label}
                    </Heading>
                </Box>
            </Box>
    );
}

export default IndividualTally;