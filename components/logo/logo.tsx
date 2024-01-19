import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';


export default function Logo() {
    return (
        <div className="w-full">
            <Link href="/">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    ভাই ভাই টেলিকম
                </Typography>
            </Link>
        </div>
    );
}