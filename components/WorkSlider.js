import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/pagination';

const workSlider = {
  slides: [
    {
      images: [
        { title: 'Live project', path: '/thumb1.jpg' },
        { title: 'Live project', path: '/thumb2.jpg' },
        { title: 'Live project', path: '/thumb3.jpg' },
        { title: 'Live project', path: '/thumb4.jpg' },
      ],
    },
    {
      images: [
        { title: 'Live project', path: '/thumb4.jpg' },
        { title: 'Live project', path: '/thumb1.jpg' },
        { title: 'Live project', path: '/thumb2.jpg' },
        { title: 'Live project', path: '/thumb3.jpg' },
      ],
    },
  ],
};

const hoverTextClass = `
  text-2xl font-bold opacity-0 translate-y-full
  group-hover:opacity-100 group-hover:translate-y-0
  transition-all duration-500 ease-out
  animate-pulse-glow group-hover:animate-floatY
  bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400
  bg-clip-text text-transparent animate-gradient
`.trim();

const hoverArrowClass = `
  text-2xl text-white opacity-0 translate-y-full
  group-hover:opacity-100 group-hover:translate-y-0
  transition-all duration-500 ease-out delay-200
  animate-pulse-glow group-hover:animate-floatX
`.trim();

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
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4">
            {slide.images.map((image, imgIndex) => (
              <motion.div
                key={`${slideIndex}-${imgIndex}`}
                className="relative rounded-lg overflow-hidden group h-[200px] sm:h-[180px] lg:h-[220px]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: imgIndex * 0.2 }}
              >
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

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700" />

                {/* Hover label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-x-3 tracking-[0.2em] font-extrabold uppercase">
                    <span className={hoverTextClass}>{image.title}</span>
                    <span className={hoverArrowClass}>
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