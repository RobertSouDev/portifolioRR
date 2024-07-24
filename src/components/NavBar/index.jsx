import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Portifolio",
        link: "/portifolio",
    },    
    {
        title: "Sobre",
        link: "/sobre",
    },    
];

const NavBar = () => {
    const [open, setOpen] = useState(false);

    console.log(open);

    const handleMenu = () => {
        setOpen((prev) => !prev);
    }

    return (
        <div className=''>
            <div className='mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-[6rem]'>
                    <div className='flex items-center'>
                        <Link to="/">Robert Roger</Link>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            {navLinks.map((linkk, i) => (
                                <Link key={i} to={linkk.link} className='text-gray-300 transition-all duration-500 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-md font-medium'>
                                    {linkk.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='-mr-2 flex md:hidden'>
                        <button 
                            type='button' 
                            onClick={handleMenu} 
                            className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                            <span className='sr-only'>Open Main menu</span>
                            {open ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {open ?(
                <div className='md:hidden'>
                    <div className='ox-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        {navLinks.map((link, i) => (
                            <Link to={link.link} key={i} className='text-gray-300 hover:bg-gray-700 hover:text-white 
                            block px-3 py-2 rounded-md text-base font-medium'>
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
            ): null }
        </div>
    );
};

export default NavBar;
