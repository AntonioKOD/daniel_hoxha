'use client'

import {Navbar, NavBody, NavItems, MobileNav, NavbarLogo, NavbarButton, MobileNavHeader, MobileNavToggle, MobileNavMenu} from '@/components/ui/resizable-navbar';
import Link from 'next/link';
import {useState} from 'react';

export default function NavBar () {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Services',
            link: '/services'
        },
        {
            name: 'Contact',
            link: '/contact'
        }
    ]

    
    return (
        <div className='relative h-full sticky top-0 left-0 right-0 z-50' >
            <Navbar>
                <NavBody>
                    <NavbarLogo/>
                    <NavItems items={navItems}/>
                    
                </NavBody>
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo/>
                        <MobileNavToggle isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}/>
                    </MobileNavHeader>
                    <MobileNavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
                        {navItems.map((item, idx)=> (
                            <Link 
                             key={idx}
                             href={item.link}
                             className='relative text-neutral-600 dark:text-neutral-300'
                        >
                            <span className='block'>{item.name}</span>
                        </Link>
                        ))}
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    )
}