import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer className="bg-white py-8">
                <div className="lg:w-4/5 xl:w-3/5 mx-auto flex flex-col gap-4 lg:flex-row justify-between items-center">


                    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
                        <img src="/nr-log-sm.png" alt="noah raffensparger small logo" className="h-5 mx-auto md:mx-0" />
                        <p className="text-sm text-gray-500">
                            © 2025 Noah Raffensparger. All Rights Reserved.
                        </p>
                    </div>

                    <nav className="flex gap-6 text-sm">
                        <Link to="/" className="hover:text-gray-500 transition-all duration-200">Home</Link>
                        <Link to="/projects" className="hover:text-gray-500 transition-all duration-200">Projects</Link>
                        <Link to="/about" className="hover:text-gray-500 transition-all duration-200">About</Link>
                        <Link to="/contact" className="hover:text-gray-500 transition-all duration-200">Contact</Link>
                    </nav>

                    <div className="flex gap-4">
                        <a href="https://github.com/NoahRaffensparger" target="_blank">
                            <img src="/github.png" alt='github' className="h-7"/>
                        </a>
                        <a href="https://www.linkedin.com/in/noah-raffensparger-6b793937a/" target="_blank">
                            <img src="/linkedin.png"  alt='linkedin' className="h-7"/>
                        </a>
                        <a href="mailto:noahtraff@gmail.com">
                            <img src="/email.png" alt='email' className="h-7"/>
                        </a>
                    </div>

                </div>
            </footer>

        </>
    );
}
