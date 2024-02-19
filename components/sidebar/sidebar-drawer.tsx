'use client';
import { useState, KeyboardEvent, MouseEvent, Fragment } from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AsystSidebar } from './sidebar';

export default function SidebarDrawer() {
    const [state, setState] = useState<boolean>(false);

    // const toggleDrawer = (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
    //     if (event.type === 'keydown' && ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')) {
    //         return;
    //     }
    //     setState({ ...state, [anchor]: open });
    // };

    return (['left'] as const).map((anchor) => (
        <Fragment key={anchor}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: 'block', md: 'none' } }}
                onClick={() => { setState(!state) }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor={'left'}
                open={state}
                onClose={() => { setState(false) }}
            >
                <AsystSidebar />
            </Drawer>
        </Fragment>
    ));
}
