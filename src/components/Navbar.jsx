import { Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import '@lottiefiles/lottie-player';
import { LottiePlayer } from '@lottiefiles/lottie-player';

export default function Navbar() {
    const currentPage = useLocation().pathname;
    const dropdownRef = useRef();
    const lottieRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // handle animation click
    const handleLottieClick = () => {
        const player = lottieRef.current;
        if (player) {
            player.setDirection(isOpen ? -1 : 1);
            player.setSpeed(3.5);
            player.play();
            setIsOpen(prev => !prev);
        }
    };
    return (
        <nav className='sticky top-0 flex justify-between md:justify-center'>
            <a href="#" className='place-content-center'>
                <img src="/nr-logo.png" className="ml-4 h-6" />
            </a>
            <div className='flex flex-row justify-end md:justify-around w-3/4 my-2 py-2 px-2 rounded-xl md:bg-gray-200'>
                <Link to="/" className={`hidden md:inline ${currentPage === '/' ? '' : 'text-black/50'}`}>home</Link>
                <Link to="/projects" className={`hidden md:inline ${currentPage === '/projects' ? '' : 'text-black/50'}`}>projects</Link>
                <Link to="/about" className={`hidden md:inline ${currentPage === '/about' ? '' : 'text-black/50'}`}>about me</Link>

                <div className='flex items-center justify-center md:hidden'>
                    <div className="relative inline-block text-center" ref={dropdownRef}>
                        <div onClick={handleLottieClick} className="cursor-pointer">
                            <lottie-player
                                ref={lottieRef}
                                src="/menu.json"
                                background="transparent"
                                speed="1"
                                className="w-8 h-auto"
                                autoplay={false}
                            ></lottie-player>
                        </div>
                        <div className={`absolute right-0 z-10 w-48 mt-2 border-1 border-gray-200 rounded-sm bg-white transition-all duration-500 ${isOpen ? 'h-30' : 'h-0 invisible pointer-events-none'}`}>
                            <ul className="py-1 text-sm text-black">
                                <li>
                                    <a href="#about" className={`block px-6 py-2 font-medium text-md hover:bg-gray-100 transition-all ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#bio" className={`block px-6 py-2 font-medium text-md hover:bg-gray-100 transition-all ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                                        Bio
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className={`block px-6 py-2 font-medium text-md hover:bg-gray-100 transition-all ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
