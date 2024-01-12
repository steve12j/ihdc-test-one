import React, { useState } from 'react'
import Header from '../../components/Header'
import { Badge, Box, Tab, Tabs, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { mockDataAdvocates } from '../../data/mockData'

const Home = () => {
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const columns = [
        {
            field: "name",
            headerName: "Name",
            flex: 1
        },
        {
            field: "enrollment",
            headerName: "Enrollment",
            flex: 1
        },
        {
            field: "plan_date",
            headerName: "Plan Date",
            flex: 1
        },
        {
            field: "amount",
            headerName: "Amount",
            flex: 1
        },
        {
            field: "paid_on",
            headerName: "Paid On",
            flex: 1
        },
        {
            field: "status",
            headerName: "Status",
            flex: 1
        },
    ]


    return <Box m="1.5rem 2.5rem" >
        <Header title="Advocates" />
        <Box m="10px 0 0 0" >
            <Box
                mb="10px"
                sx={{
                    width: '100%',
                }}

            >
                <Tabs
                    value={value}
                    textColor="secondary"
                    indicatorColor="secondary"
                    variant="scrollable"
                    scrollButtons="auto"
                    allowScrollButtonsMobile
                    sx={{
                        '& .css-heg063-MuiTabs-flexContainer': {
                            justifyContent: "space-between",
                        },
                        '& .MuiBadge-badge': {
                            top: '-3px',
                            right: '-7px',
                            borderRadius: "10px",
                            height: "16px",
                            minWidth: "16px",
                            fontWeight: "600",
                            p: "0 4px"
                        }
                    }}
                    onChange={handleChange}
                >
                    <Tab label={<Badge badgeContent={0} color="secondary">
                        Active Members
                    </Badge>} />
                    <Tab label={<Badge badgeContent={3} color="secondary">
                        Pending Request
                    </Badge>} />
                    <Tab label={<Badge badgeContent={2} color="secondary">
                        Membership Expired
                    </Badge>} />
                </Tabs>
            </Box>
            <Box
                height="70vh"
                sx={{
                    '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                        color: theme.palette.secondary[100]
                    }
                }}
            >
                <DataGrid
                    rows={mockDataAdvocates}
                    columns={columns}

                    slots={{
                        toolbar: GridToolbar
                    }}
                />

            </Box>
        </Box>
    </Box>

}

export default Home