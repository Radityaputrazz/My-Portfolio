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
        320: { slidesPerView: 1, spaceBetween: 12 },
        480: { slidesPerView: 1.3, spaceBetween: 14 },
        640: { slidesPerView: 2, spaceBetween: 16 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
      }}
      freeMode
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[280px] lg:h-[320px] pb-10"
    >
      {serviceData.map((item) => (
        <SwiperSlide key={item.title}>
          <div className="
            h-full flex flex-col justify-between items-start
            gap-y-3 px-5 py-6 rounded-xl
            border border-white/10
            bg-white/5
            shadow-md cursor-pointer group
            transition-all duration-300
            hover:bg-white/10
            hover:border-accent
            hover:shadow-accent/20 hover:shadow-lg
            hover:-translate-y-1
          ">
            {/* Icon */}
            <div className="text-4xl text-accent transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="mb-2 text-sm sm:text-base font-semibold text-white leading-snug">
                {item.title}
              </p>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Arrow */}
            <RxArrowTopRight className="
              text-xl sm:text-2xl self-end text-white/40
              transition-all duration-300
              group-hover:rotate-45 group-hover:text-accent
            " />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;