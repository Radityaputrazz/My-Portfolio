// import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper";

// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Project Manager',
    message:
      'Working with Raditya was a game-changer. His full-stack expertise ensured our web application was delivered on time with **seamless UX and robust backend performance**.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'CEO, TechCorp',
    message:
      'Raditya’s skills in **frontend design and backend architecture** transformed our ideas into a fully functional, scalable product. Truly professional and detail-oriented.',
  },
  {
    image: '/t-avt-3.png',
    name: 'John Doe',
    position: 'Startup Founder',
    message:
      'I highly recommend Raditya. He delivered a **modern, responsive, and high-performance application** that exceeded our expectations in both speed and usability.',
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="py-8"
    >
      {testimonialData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] rounded-lg p-6 flex flex-col items-start
            gap-y-4 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
            
            {/* Avatar */}
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-full object-cover mb-2"
            />

            {/* Name & Position */}
            <div className="mb-2">
              <h4 className="text-white font-semibold">{item.name}</h4>
              <p className="text-gray-300 text-sm">{item.position}</p>
            </div>

            {/* Message */}
            <p className="text-gray-200 leading-relaxed">{item.message}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
