// components
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className="relative h-full bg-primary/30 py-24 xl:py-36 flex items-center">
      <Circles />

      <div className="container mx-auto flex flex-col xl:flex-row gap-x-8">
        {/* text section */}
        <div className="flex flex-col xl:w-[30vw] text-center lg:text-left mb-8 xl:mb-0">
          <motion.h2
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xl:mt-8"
          >
            Featured <span className="text-accent">Projects</span>
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-6 max-w-[400px] mx-auto lg:mx-0 text-gray-300"
          >
            Explore a curated selection of my work as a Full-Stack Developer. From engaging frontend interfaces to robust backend solutions and APIs, these projects showcase scalable, modern, and user-friendly applications built with best practices.
          </motion.p>
        </div>

        {/* slider */}
        <motion.div
          variants={fadeIn('down', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:max-w-[65%]"
        >
          <WorkSlider />
        </motion.div>
      </div>

      <Bulb />
    </div>
  );
};

export default Work;
