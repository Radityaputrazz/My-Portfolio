// components
import ServiceSlider from '../../components/ServiceSlider';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
  return (
    <section className='min-h-screen bg-primary/30 py-16 xl:py-24 flex items-center relative'>
      <Circles />
      <div className='container mx-auto px-4'>
        <div className='flex flex-col xl:flex-row items-start gap-8 xl:gap-16'>

          {/* Text */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='flex flex-col xl:w-[300px] flex-shrink-0'
          >
            <h2 className='h2 text-center xl:text-left mb-4'>
              What I Do <span className='text-accent'>.</span>
            </h2>
            <p className='text-white/60 text-sm sm:text-base leading-relaxed text-center xl:text-left max-w-[380px] mx-auto xl:mx-0'>
              I transform ideas into high-performance, scalable web applications
              by combining UI/UX design, frontend engineering, backend
              architecture, and deployment optimization.
            </p>
          </motion.div>

          {/* Slider */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='flex-1 min-w-0 w-full'
          >
            <ServiceSlider />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;