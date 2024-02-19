'use client';
import { useState, KeyboardEvent, MouseEvent, Fragment } from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AsystSidebar } from './sidebar';

type Anchor = 'left';

export default function SidebarDrawer() {
    const [state, setState] = useState({ left: false });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
        if (event.type === 'keydown' && ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const NavList = () => (
        <div className="w-[250px]">
            <AsystSidebar />
        </div>
    );

    return (['left'] as const).map((anchor) => (
        <Fragment key={anchor}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: 'block', md: 'none' } }}
                onClick={toggleDrawer(anchor, true)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
            >
                <NavList />
            </Drawer>
        </Fragment>
    ));
}
