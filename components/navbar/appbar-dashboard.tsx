'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { getCurrentUser } from '@/context/FirebaseContext';
import SidebarDrawer from '../sidebar/sidebar-drawer';
import Logo from '../logo/logo';
import AccountMenu from './profile/dropdown/dropdown';

export default function AppBarDashboard() {
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
