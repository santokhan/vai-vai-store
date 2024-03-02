'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../logo/logo';
import Link from 'next/link';

export default function MenuAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Logo />
                    <Link href="/dashboard" className="font-semibold whitespace-nowrap rounded-lg px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800">ড্যাশবোর্ডে যান</Link>
                    {/* <AccountMenu /> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
