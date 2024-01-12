import React from 'react'
import { DarkModeOutlined, LightModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDown, Inbox } from '@mui/icons-material'
import FlexBetween from './FlexBetween'
import { useDispatch } from 'react-redux'
import { setMode } from '@/state'
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from '@mui/material'


const Navbar = (props) => {
    const dispatch = useDispatch();
    const theme = useTheme();
    return (
        <AppBar
            sx={{
                position: "static",
                background: "none",
                boxShadow: "none"
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* LEFT SIDE */}
                <FlexBetween
                    gap="1rem"
                >
                    <IconButton onClick={() => props.setIsSidebarOpen(prev=>!prev)} >
                        <MenuIcon />
                    </IconButton>
                    <FlexBetween
                        backgroundColor={theme.palette.background.alt}
                        borderRadius="4px"
                        gap="3rem"
                        padding=".1rem 1.5rem "
                    >
                        <InputBase placeholder='Search...' />
                        <IconButton>
                            <Search />
                        </IconButton>
                    </FlexBetween>
                </FlexBetween>
                <FlexBetween gap="1.5rem">
                    <IconButton onClick={() => dispatch(setMode())}>
                        {theme.palette.mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
                    </IconButton>
                    <IconButton>
                        <SettingsOutlined />
                    </IconButton>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar