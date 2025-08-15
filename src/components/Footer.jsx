export default function Footer() {
    return (
        <>
            <footer className="bg-white py-8">
                <div className="lg:w-4/5 xl:w-3/5 mx-auto flex flex-col gap-4 lg:flex-row justify-between items-center">


                    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
                        <img src="/nr-logo.png" alt="Logo" className="h-5 mx-auto md:mx-0" />
                        <p className="text-sm text-gray-500">
                            © 2025 Noah Raffensparger. All Rights Reserved.
                        </p>
                    </div>

                    <nav className="flex gap-6 text-sm">
                        <a href="/" className="hover:text-gray-500 transition-all duration-200">Home</a>
                        <a href="/projects" className="hover:text-gray-500 transition-all duration-200">Projects</a>
                        <a href="/about" className="hover:text-gray-500 transition-all duration-200">About</a>
                        <a href="/contact" className="hover:text-gray-500 transition-all duration-200">Contact</a>
                    </nav>

                    <div className="flex gap-4">
                        <a href="https://github.com/NoahRaffensparger" target="_blank">
                            <img src="/github.png" className="h-7"/>
                        </a>
                        <a href="https://github.com/NoahRaffensparger" target="_blank">
                            <img src="/linkedin.png" className="h-7"/>
                        </a>
                        <a href="mailto:noahtraff@gmail.com">
                            <img src="/email.png" className="h-7"/>
                        </a>
                    </div>

                </div>
            </footer>

        </>
    );
}
