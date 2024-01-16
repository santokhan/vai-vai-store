'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { getCurrentUser } from '@/context/FirebaseContext';
import SidebarDrawer from '../sidebar/sidebar-drawer';
import Logo from '../logo/logo';
import AccountMenu from './profile/dropdown/dropdown';

export default function AppBarDashboard() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const currentUser = getCurrentUser();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {/* [ MenuBar | Icon Logo | Profile Avator ] */}
                    <SidebarDrawer />
                    <Logo />
                    <AccountMenu />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
