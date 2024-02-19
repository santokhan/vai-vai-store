'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../logo/logo';

export default function MenuAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Logo />
                    {/* <AccountMenu /> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
