import React, { Fragment, useEffect, useState } from 'react'
import {
    Box,
    Button,
    Collapse,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import {
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    Groups2Outlined,
} from "@mui/icons-material";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';


const navItems = [
    {
        text: "Home",
        icon: <HomeOutlined />,
        pathName: "home"
    },
    {
        text: "Admin",
        icon: <AdminPanelSettingsOutlinedIcon />,
        pathName: "admin"
    },
    {
        text: "Membership",
        icon: <Groups2Outlined />,
        pathName: "membership"
    },
    {
        text: "Advocate",
        icon: <PersonOutlinedIcon />,
        pathName: "advocate"
    },
];

const SideBar = (props) => {
    const { pathname } = useLocation("");
    const [active, setActive] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname])

    return (
        <Box component="nav">
            {<Drawer
                open={props.isSidebarOpen}
                onClose={() => props.setIsSidebarOpen(false)}
                variant="persistent"
                anchor="left"
                sx={{
                    width: props.isSidebarOpen && props.drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        color: theme.palette.secondary[200],
                        background: theme.palette.background.alt,
                        boxSizing: "border-box",
                        borderWidth: props.isNonMobile ? 0 : "2px",
                        width: props.drawerWidth
                    }
                }}
            >
                <Box width="100%" >
                    <Box m="1.5rem 2rem 2rem 1.5rem">
                        <FlexBetween color={theme.palette.secondary.main}>
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                gap="8px"
                            >
                                <Box
                                    width="60px"
                                    height="60px"
                                    backgroundColor={theme.palette.grey[500]}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    borderRadius="50%"
                                >
                                    <Typography variant='h5' color="primary">Logo</Typography>
                                </Box>
                                <Typography variant="h4" fontWeight="bold">
                                    Association
                                </Typography>
                            </Box>
                            {
                                !props.isNonMobile &&
                                <IconButton onClick={() => props.setIsSidebarOpen(!props.isSidebarOpen)} >
                                    <ChevronLeft />
                                </IconButton>
                            }
                        </FlexBetween>
                    </Box>
                    <List>
                        {navItems.map(({ text, icon, subText, pathName }, index) => {
                            return (
                                <ListItem key={index} disablePadding>
                                    <ListItemButton
                                        onClick={() => {
                                            setActive(pathName);
                                            navigate(`/${pathName}`)
                                        }}
                                        sx={{
                                            backgroundColor: active === pathName ? theme.palette.secondary[300] : "transparent",
                                            color: active === pathName ? theme.palette.primary[600] : theme.palette.secondary[200],
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                ml: "1rem",
                                                color: active === pathName ? theme.palette.primary[600] : theme.palette.secondary[200]
                                            }}
                                        >
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                        {
                                            active === pathName ? <ChevronRightOutlined sx={{ ml: "auto" }} /> : undefined
                                        }
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}

                    </List>
                </Box>
                <Box
                    position="absolute"
                    bottom="2rem"
                    width="100%"
                // display="flex"
                // alignItems="center"
                >
                    <Divider />
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        mt="20px"
                        gap="6px"
                    >
                        <Button variant="contained" startIcon={<LogoutOutlinedIcon />}>
                            Logout
                        </Button>
                    </Box>
                </Box>
            </Drawer>}

        </Box>
    )
}

export default SideBar