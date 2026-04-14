import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Project Manager",
    message: "Working with Raditya was a game-changer. His ",
    highlights: ["full-stack expertise"],
    messageMid: " ensured our web application was delivered on time with ",
    highlightsMid: ["seamless UX and robust backend performance"],
    messageEnd: ".",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "CEO, TechCorp",
    message: "Raditya's skills in ",
    highlights: ["frontend design and backend architecture"],
    messageMid: " transformed our ideas into a fully functional, scalable product. Truly ",
    highlightsMid: ["professional"],
    messageEnd: " and detail-oriented.",
  },
  {
    image: "/t-avt-3.png",
    name: "John Doe",
    position: "Startup Founder",
    message: "I highly recommend Raditya. He delivered a ",
    highlights: ["modern, responsive, and high-performance application"],
    messageMid: " that exceeded our expectations in both speed and usability.",
    highlightsMid: [],
    messageEnd: "",
  },
];

const TestimonialCard = ({ item }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    whileTap={{ scale: 0.97, y: 0 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    className="relative flex flex-col items-center text-center h-[440px] rounded-2xl p-6 shadow-lg text-white bg-gradient-to-br from-[#1f1739] via-[#2e2257] to-[#3b2d71] transition-all duration-300 hover:shadow-2xl hover:shadow-accent/50"
  >
    <div className="relative w-20 h-20 mb-3">
      <Image
        src={item.image}
        alt={item.name}
        fill
        className="rounded-full object-cover border-2 border-white/30"
      />
    </div>

    <h4 className="text-white font-semibold text-lg">{item.name}</h4>
    <p className="text-gray-300 text-sm mb-3">{item.position}</p>

    <p className="text-white/90 leading-relaxed text-sm">
      {item.message}
      {item.highlights.map((h, i) => (
        <span key={i} className="text-accent font-semibold">{h}</span>
      ))}
      {item.messageMid}
      {item.highlightsMid.map((h, i) => (
        <span key={i} className="text-accent font-semibold">{h}</span>
      ))}
      {item.messageEnd}
    </p>
  </motion.div>
);

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
      {testimonialData.map((item) => (
        <SwiperSlide key={item.name}>
          <TestimonialCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;