'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AuthProvider from '@/context/FirebaseContext';
import Logo from '../logo/logo';
import AccountMenu from './profile/dropdown/dropdown';

export default function MenuAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Logo />
                    <AuthProvider>
                        <AccountMenu />
                    </AuthProvider>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
