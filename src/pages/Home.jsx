import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div className='flex justify-center'>
                <div className='flex flex-col max-w-screen md:w-4/5 xl:w-3/5 gap-8 sm:gap-0 sm:flex-row sm:justify-around mt-18 px-4 sm:pl-6 md:pl-8 md:pr-0'>
                    <div className="leading-none flex flex-col justify-center sm:w-1/2">
                        <h2 className="text-[clamp(2.5rem,12vw,4rem)] sm:text-5xl lg:text-7xl font-extrabold pb-3">noah<br />raffensparger</h2>
                        <h1 className="text-[clamp(1rem,5vw,2.25rem)] sm:text-xl lg:text-2xl text-black/80 pb-4">junior developer focused on creating clean, functional, productive apps</h1>
                        <div className='flex gap-2 text-[clamp(1.25rem,4.5vw,2rem)] sm:text-xl pt-3'>
                            <Link to="/projects" className='px-3 py-[7px] bg-gray-200 rounded'>my projects</Link>
                            <Link to="/contact" className='px-3 py-[7px] bg-gray-800 rounded text-white'>contact me</Link>
                        </div>
                    </div>
                    <img className='w-7/8 max-w-[375px] sm:max-w-1/2 self-center' src="/noah2.png"></img>
                </div>
            </div>
            <div className='bg-gray-200 py-12 px-4'>
                <div className='flex justify-center'>
                    <h2 className='w-[290px] md:w-[320px] md:mx-6 text-[clamp(1.75rem,9vw,2rem)] md:text-4xl text-black/80 font-semibold text-left pb-6'>my toolbox:</h2>
                    <h2 className='hidden lg:inline lg:invisible w-[290px] md:w-[320px] md:mx-6 text-[clamp(1.75rem,9vw,2rem)] md:text-4xl text-black/80 font-semibold text-left pb-6'>my toolbox:</h2>
                    <h2 className='hidden lg:inline lg:invisible w-[290px] md:w-[320px] md:mx-6 text-[clamp(1.75rem,9vw,2rem)] md:text-4xl text-black/80 font-semibold text-left pb-6'>my toolbox:</h2>
                </div>
                <div className='flex flex-col lg:flex-row items-center lg:justify-center'>
                    <div className="w-[290px] md:w-[320px] rounded-2xl mx-6 py-10 text-left section-1-border flex flex-col items-start md:max-w-lg">
                        <div className='mb-2 w-full flex gap-2'>
                            <img src="/html-5.png" alt="html5" className="h-8" />
                            <img src="/css-3.png" alt="css3" className="h-8" />
                            <img src="/js.png" alt="javascript" className="h-8" />
                        </div>
                        <h3 className="text-3xl font-semibold mb-2 md:text-4xl">core foundations</h3>
                        <h3 className="text-gray-800 text-lg md:text-[1.1rem] lg:h-[82px]">- HTML5, CSS3, JavaScript</h3>
                    </div>
                    <div className="w-[290px] md:w-[320px] rounded-2xl mx-6 py-10 text-left section-2-border flex flex-col items-start md:max-w-lg">
                        <div className='mb-2 w-full flex gap-2'>
                            <img src="/react.png" alt="react" className="h-8" />
                            <img src="/vite.png" alt="vite" className="h-8" />
                            <img src="/tailwind.png" alt="tailwind" className="h-8" />
                            <img src="/bootstrap.png" alt="bootstrap" className="h-8" />
                        </div>
                        <h3 className="text-3xl font-semibold mb-2 md:text-4xl">front-end</h3>
                        <h3 className="text-gray-800 text-lg md:text-[1.1rem]">- React, Vite, Tailwindcss, BootStrap<br />- Responsive, mobile-first design<br />- UX/UI awareness</h3>
                    </div>
                    <div className="w-[290px] md:w-[320px] rounded-2xl mx-6 py-10 text-left section-3-border flex flex-col items-start md:max-w-lg">
                        <div className='mb-2 w-full flex gap-2'>
                            <img src="/developer.png" alt="developer" className="h-8" />
                            <img src="/sql-server.png" alt="sql server" className="h-8" />
                        </div>
                        <h3 className="text-3xl font-semibold mb-2 md:text-4xl">back-end</h3>
                        <h3 className="text-gray-800 text-lg md:text-[1.1rem]">- Node.js, API's, authentication<br />- Databases: SQL, NoSQL<br />- Security</h3>
                    </div>
                </div>
            </div>
        </>
    );
}
