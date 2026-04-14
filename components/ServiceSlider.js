import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    icon: <RxCrop />,
    title: "UI/UX Design",
    description: "Crafting intuitive interfaces that enhance user experiences.",
  },
  {
    icon: <RxPencil2 />,
    title: "Frontend Development",
    description: "Building responsive, high-performance client-side apps.",
  },
  {
    icon: <RxDesktop />,
    title: "Backend & API Development",
    description: "Architecting scalable, secure server-side solutions.",
  },
  {
    icon: <RxReader />,
    title: "Technical Writing",
    description: "Creating clear, concise documentation for systems.",
  },
  {
    icon: <RxRocket />,
    title: "Deployment & Optimization",
    description: "Ensuring smooth deployment and optimized web performance.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
      }}
      freeMode
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[220px] sm:h-[280px] lg:h-[320px]"
    >
      {serviceData.map((item) => (
        <SwiperSlide key={item.title}>
          <div className="min-h-[220px] sm:min-h-[280px] lg:min-h-[320px] flex flex-col justify-between items-start gap-y-2 px-4 py-6 rounded-lg border border-transparent bg-[rgba(65,47,123,0.15)] shadow-md cursor-pointer group transition-all duration-300 hover:bg-[rgba(89,65,169,0.25)] hover:border-accent hover:shadow-xl hover:scale-105">
            <div className="text-3xl text-accent">{item.icon}</div>
            <div className="flex-1">
              <p className="mb-1 text-base font-semibold text-white">{item.title}</p>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
            <RxArrowTopRight className="text-2xl self-end transition-all duration-300 group-hover:rotate-45 group-hover:text-accent" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;