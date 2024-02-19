'use client';
import { useState, useEffect, useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AsystSidebar } from './sidebar';

export default function SidebarDrawer() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const sidebarWrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarWrapper.current && !sidebarWrapper.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    const toggleDrawer = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div ref={sidebarWrapper}>
            <button onClick={toggleDrawer} className='block md:hidden mr-3'>
                <MenuIcon />
            </button>
            {isOpen && (
                <div className={`absolute top-full z-10 right-0 left-0`}>
                    <AsystSidebar />
                </div>
            )}
        </div>
    );
}
