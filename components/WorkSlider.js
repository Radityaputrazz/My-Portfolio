// work slider data
const workSlider = {
  slides: [
    {
      images: [
        { title: 'LIVE PROJECT', path: '/thumb1.jpg' },
        { title: 'LIVE PROJECT', path: '/thumb2.jpg' },
        { title: 'LIVE PROJECT', path: '/thumb3.jpg' },
        { title: 'LIVE PROJECT', path: '/thumb4.jpg' },
      ],
    },
    {
      images: [
        { title: 'LIVE PROJECT', path: '/thumb4.jpg' },
        { title: 'LIVE PROJECT', path: '/thumb1.jpg' },
        { title: 'LIVE PROJECT', path: '/thumb2.jpg' },
        { title: 'LIVE PROJECT', path: '/thumb3.jpg' },
      ],
    },
  ],
};

// import
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={16}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-auto"
    >
      {workSlider.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4">
            {slide.images.map((image, imgIndex) => (
              <motion.div
                key={`${slideIndex}-${imgIndex}`}
                className="relative rounded-lg overflow-hidden group h-[200px] sm:h-[180px] lg:h-[220px]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: imgIndex * 0.2 }}
              >
                {/* image wrapper with hover zoom */}
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={image.path}
                    alt={image.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-l
                  from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                  group-hover:opacity-80 transition-all duration-700"
                ></div>

                {/* title muncul saat hover */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-x-3 tracking-[0.2em] font-extrabold uppercase">
                    
                    {/* Text dengan gradient + glow + pulse */}
                    <span
                      className="text-2xl font-bold opacity-0 translate-y-full
                      group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-500 ease-out delay-100
                      bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400
                      bg-clip-text text-transparent animate-gradient animate-pulse-glow
                      [text-shadow:0_0_10px_rgba(255,0,255,0.8),0_0_20px_rgba(0,128,255,0.8)]
                      group-hover:animate-floatY"
                    >
                      LIVE PROJECT
                    </span>

                    {/* Arrow dengan efek sama */}
                 <span
                    className="text-2xl text-white opacity-0 translate-y-full
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-500 ease-out delay-200
                    animate-pulse-glow
                    [text-shadow:0_0_10px_rgba(255,255,255,0.9),0_0_20px_rgba(255,255,255,0.8)]
                    group-hover:animate-floatX"
                  >
                    <BsArrowRight />
                  </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
