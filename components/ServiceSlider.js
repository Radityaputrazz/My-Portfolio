import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';

export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and engaging interfaces that enhance user experiences.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Frontend Development',
    description: 'Building responsive, interactive, and high-performance client-side applications.',
  },
  {
    icon: <RxDesktop />,
    title: 'Backend & API Development',
    description: 'Architecting scalable and secure server-side solutions with robust APIs.',
  },
  {
    icon: <RxReader />,
    title: 'Technical Writing',
    description: 'Creating clear and concise documentation for applications and systems.',
  },
  {
    icon: <RxRocket />,
    title: 'Deployment & Optimization',
    description: 'Ensuring smooth deployment and optimized performance for web projects.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px] lg:h-[440px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] min-h-[300px] sm:min-h-[360px] lg:min-h-[440px] 
            rounded-lg px-6 py-8 flex flex-col justify-between items-start
            gap-y-4 group cursor-pointer
            hover:bg-[rgba(89,65,169,0.25)]
            transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105
            border border-transparent hover:border-accent"
          >
            {/* Icon */}
            <div className="text-4xl text-accent mb-2">{item.icon}</div>

            {/* Title & Description */}
            <div className="flex-1">
              <div className="mb-2 text-lg font-semibold text-white">{item.title}</div>
              <p className="text-gray-300">{item.description}</p>
            </div>

            {/* Arrow */}
            <div className="text-3xl self-end">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent
                transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
