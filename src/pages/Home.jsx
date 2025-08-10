import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div className='flex flex-col sm:flex-row mt-18 px-4'>
                <div className="leading-none sm:w-1/2 flex flex-col justify-center">
                    <h2 className="text-[clamp(2.5rem,12vw,3.5rem)] sm:text-5xl lg:text-7xl font-extrabold">noah<br/>raffensparger</h2>
                    <h1 className="text-[clamp(1rem,8vw,2.25rem)] sm:text-3xl lg:text-5xl text-black/80 pb-4">developer</h1>
                    <div className='flex gap-2 text-[clamp(1.25rem,4.5vw,2rem)] sm:text-xl pt-3'>
                        <Link to="/projects" className='px-3 py-[7px] bg-gray-200 rounded'>my projects</Link>
                        <Link to="/contact" className='px-3 py-[7px] bg-gray-700 rounded text-white'>contact me</Link>
                    </div>
                </div>
                <img className='w-full max-w-[400px] sm:w-1/2 sm:max-w-[5000px] self-center' src="/noah.png"></img>
            </div>
            <div className='bg-gray-600 h-96'></div>

        </>
    );
}
