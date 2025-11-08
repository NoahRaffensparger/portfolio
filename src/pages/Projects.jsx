import Swiper2 from '../components/Swiper2'

export default function Projects() {
  return (
    <>
      <div className="bg-gray-300 py-6">
        <h2 className="text-4xl text-center font-semibold text-black/80">projects</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center">

          <div className="bg-white rounded-xl max-w-[650px] lg:max-w-2/5 mx-4 px-4 py-4 flex flex-col gap-4 mt-6">
            <h3 className="text-2xl font-semibold">Bartending Consulting Site</h3>
            <div className='flex justify-center'>
              <Swiper2 />
            </div>
            <h4 className="font-semibold">Description</h4>
            <p>A one-page website for BardreamZ — a bartending consulting business specializing in bar design, cocktail menu development, and unforgettable guest experiences.</p>
            <h4 className="font-semibold">Tech</h4>
            <p>React, Tailwind CSS, Swiper.js, Formspree</p>
            <a href="https://bardreamz.com/" target="_blank" className="text-blue-500">Visit site</a>
            <p className="pt-4 border-t-1 border-gray-300">I built this website for a coworker who owns his own consulting business. I focused on modern, mobile-first design and simple UX/UI.</p>
          </div>

          <div className="bg-white rounded-xl max-w-[650px] lg:max-w-2/5 mx-4 px-4 py-4 flex flex-col gap-4 mt-6">
            <h3 className="text-2xl font-semibold">Bartending Consulting Site</h3>
            <a href="https://bardreamz.com/" target="_blank">
              <img src="/bardreamz-screenshot.PNG" className="shadow-lg rounded-xl border-1 border-gray-300"></img>
            </a>
            <h4 className="font-semibold">Description</h4>
            <p>A one-page website for BardreamZ — a bartending consulting business specializing in bar design, cocktail menu development, and unforgettable guest experiences.</p>
            <h4 className="font-semibold">Tech</h4>
            <p>React, Tailwind CSS, Swiper.js, Formspree</p>
            <a href="https://bardreamz.com/" target="_blank" className="text-blue-500">Visit site</a>
            <p className="pt-4 border-t-1 border-gray-300">I built this website for a coworker who owns his own consulting business. I focused on modern, mobile-first design and simple UX/UI.</p>
          </div>

          <div className="bg-white rounded-xl max-w-[650px] lg:max-w-2/5 mx-4 px-4 py-4 flex flex-col gap-4 mt-6">
            <h3 className="text-2xl font-semibold">PSQL Server Routes</h3>
            <a href="https://github.com/NoahRaffensparger/PSQL-server-routes/tree/main/" target="_blank">
              <img src="/PSQL-screenshot.PNG" className="shadow-lg rounded-xl border-1 border-gray-300"></img>
            </a>
            <h4 className="font-semibold">Description</h4>
            <p>An application showing the correct server routes for a PSQL database. Routes for GET, PUT, POST, and DELETE are all executed functionally.</p>
            <h4 className="font-semibold">Tech</h4>
            <p>PSQL, Node.js</p>
            <a href="https://github.com/NoahRaffensparger/PSQL-server-routes/tree/main/" target="_blank" className="text-blue-500">Visit repo</a>
          </div>
        </div>

      </div>
    </>
  );
}
