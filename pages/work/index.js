import WorkSlider from '../../components/WorkSlider';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <section className='min-h-screen bg-primary/30 py-16 xl:py-24 flex items-center relative'>
      <Circles />
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='flex flex-col xl:flex-row items-center xl:items-start gap-10 xl:gap-16'>

          {/* Text */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='flex flex-col items-center xl:items-start xl:w-[300px] flex-shrink-0 w-full'
          >
            <h2 className='text-3xl sm:text-4xl font-bold text-white text-center xl:text-left mb-4'>
              My Work <span className='text-accent'>.</span>
            </h2>
            <p className='text-white/60 text-sm sm:text-base leading-relaxed text-center xl:text-left max-w-[380px]'>
              Showcasing my expertise in building modern, scalable, and
              responsive web applications for diverse clients.
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
            <WorkSlider />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Work;