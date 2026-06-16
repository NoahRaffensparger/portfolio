import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const images = [
    '/noah-wedding.jpg',
    '/cats.jpg',
    '/boat.jpg',
];

export default function ImageSwiper() {
    return (
        <div className="relative w-screen max-w-[370px] sm:max-w-[600px] px-4 sm:px-24 lg:pl-4 lg:pr-0 lg:m-0 lg:mr-4 lg:py-4 lg:max-w-96">
            <button className="swiper-prev absolute top-1/2 left-6 sm:left-30 lg:left-6 -translate-y-1/2 z-9 p-1 bg-gray-200 rounded-3xl shadow">
                <img src="/back.png" className="w-5 h-5" />
            </button>

            <button className="swiper-next absolute top-1/2 right-6 sm:right-30 lg:right-2  -translate-y-1/2 z-9 p-1 bg-gray-200 rounded-3xl shadow">
                <img src="/next.png" className="w-5 h-5" />
            </button>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev',
                }}
                autoplay={{
                    delay: 10000,
                }}
                loop={true}
                breakpoints={true}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{
                    dynamicBullets: true
                }}
                className="swiper-shadow rounded-xl overflow-hidden border-2 border-gray-500"
            >
                {images.map((src, i) => (
                    <SwiperSlide key={i}>
                        <img src={src} alt={`Slide ${i + 1}`} className="slider w-full h-88 sm:h-[550px] object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
