import { Box, Pagination } from "@mui/material";
import React from "react";

const PaginationBlock = ({ page, setPage }) => {
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <Box>
            <Pagination
                count={3}
                value={page}
                page={page}
                onChange={handleChange}
            />
        </Box>
    );
};

export default PaginationBlock;
