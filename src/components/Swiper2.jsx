import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const images = [
    '/music-app-sc-1.PNG',
    '/music-app-sc-2.PNG',
    '/music-app-sc-3.PNG',
    '/music-app-sc-4.PNG'
];

export default function ImageSwiper() {
    return (
        <div className="w-70">
            <button className="swiper-prev relative top-1/2 left-2 z-9 p-1 bg-gray-100 rounded-3xl shadow">
                <img src="/back.png" className="w-5 h-5" />
            </button>

            <button className="swiper-next relative top-1/2 right-[-214px] z-9 p-1 bg-gray-100 rounded-3xl shadow">
                <img src="/next.png" className="w-5 h-5" />
            </button>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev',
                }}
                autoplay={{
                    delay: 5000,
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
                        <img src={src} alt={`Slide ${i + 1}`}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
