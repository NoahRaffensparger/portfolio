import { Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import '@lottiefiles/lottie-player';

export default function Navbar() {
    const currentPage = useLocation().pathname;
    const dropdownRef = useRef();
    const lottieRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                lottieRef.current.setDirection(-1)
                lottieRef.current.play();
                console.log('hello')
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLottieClick = () => {
        const player = lottieRef.current;
        if (player) {
            player.setDirection(isOpen ? -1 : 1);
            player.setSpeed(3.5);
            player.play();
            setIsOpen(prev => !prev);
        }
    };

    const closeNav = () => {
        setIsOpen(false)
        lottieRef.current.play()
        lottieRef.current.setDirection(-1)
    }

    return (
        <nav className='sticky top-0 flex bg-white border-b-1 border-gray-100 justify-between md:py-2 z-10'>
            <Link to="/" className='place-content-center'>
                <img src="/nr-logo.png" className="ml-4 h-5 md:h-8" />
            </Link>
            <div className='flex flex-row justify-end md:justify-around w-2/4 my-2 py-2 px-2 rounded-xl md:bg-gray-200'>
                <Link to="/" className={`hidden md:inline hover:text-black transition-all duration-200 ${currentPage === '/' ? '' : 'text-black/50'}`}>home</Link>
                <Link to="/projects" className={`hidden md:inline hover:text-black transition-all duration-200 ${currentPage === '/projects' ? '' : 'text-black/50'}`}>projects</Link>
                <Link to="/about" className={`hidden md:inline hover:text-black transition-all duration-200 ${currentPage === '/about' ? '' : 'text-black/50'}`}>about me</Link>
                <Link to="/contact" className={`hidden md:inline hover:text-black transition-all duration-200 ${currentPage === '/contact' ? '' : 'text-black/50'}`}>contact</Link>

                <div className='flex items-center justify-center md:hidden'>
                    <div className="relative inline-block text-center" ref={dropdownRef}>
                        <div onClick={handleLottieClick} className="cursor-pointer">
                            <lottie-player
                                ref={lottieRef}
                                src="/menu.json"
                                background="transparent"
                                speed="1"
                                className="w-7 h-auto"
                                autoplay={false}
                            ></lottie-player>
                        </div>
                        <div className={`absolute right-[-8px] top-[30px] z-10 w-screen mt-2  border-gray-100 rounded-sm bg-white transition-all border-b-1 ${isOpen ? 'h-80 duration-800' : 'h-0 invisible pointer-events-none duration-500'}`}>
                            <ul className="text-black h-full">
                                <li className='h-1/4 flex justify-center items-center'>
                                    <Link to="/" onClick={closeNav} className={`block font-medium text-md transition-all ${isOpen ? 'opacity-100 duration-900' : 'opacity-0 duration-100'}`}>
                                        home
                                    </Link>
                                </li>
                                <li className='h-1/4 flex justify-center items-center partial-border'>
                                    <Link to="/projects" onClick={closeNav} className={`block font-medium text-md transition-all ${isOpen ? 'opacity-100 duration-1050' : 'opacity-0 duration-100'}`}>
                                        projects
                                    </Link>
                                </li>
                                <li className='h-1/4 flex justify-center items-center partial-border'>
                                    <Link to="/about" onClick={closeNav} className={`block font-medium text-md transition-all ${isOpen ? 'opacity-100 duration-1200' : 'opacity-0 duration-100'}`}>
                                        about me
                                    </Link>
                                </li>
                                <li className='h-1/4 flex justify-center items-center partial-border'>
                                    <Link to="/contact" onClick={closeNav} className={`block font-medium text-md transition-all ${isOpen ? 'opacity-100 duration-1350' : 'opacity-0 duration-100'}`}>
                                        contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden md:inline w-[24px] ml-[16px]' />
        </nav>
    );
}
