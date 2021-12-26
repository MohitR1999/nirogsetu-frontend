import { Box, Heading, Text } from "grommet";
import React from "react";

const NirogHeader = () => {
    return (
        <Box
        direction="column"
        pad="small"
        >
            <Heading margin={"small"}>
                Nirog Setu
            </Heading>

            <Heading margin={"small"} level={3}>
                A Covid-19 tracker
            </Heading>
        </Box>
    );
}

export default NirogHeader;