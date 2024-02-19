'use client';
import { useState, Fragment } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AsystSidebar } from './sidebar';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

export default function SidebarDrawer() {
    const [state, setState] = useState<boolean>(false);

    const toggleDrawer = () => {
        setState((prevState) => !prevState)
    }

    return (['left'] as const).map((anchor) => (
        <Fragment key={anchor}>
            <button onClick={toggleDrawer} className='block md:hidden mr-3'>
                <MenuIcon />
            </button>
            <Drawer
                open={state}
                onClose={toggleDrawer}
                direction='left'
                className='absolute left-0 w-1/2 h-full bg-white z-10'
            >
                <AsystSidebar />
            </Drawer>
        </Fragment>
    ));
}
