import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

const Header = ({ title }) => {
    const theme = useTheme();
    return (
        <Box
        >
            <Typography
                variant='h2'
                fontWeight="bold"
                color={theme.palette.secondary[100]}
                sx={{ mb: "5px" }}
            >
                {title}
            </Typography>
        </Box>
    )
}

export default Header