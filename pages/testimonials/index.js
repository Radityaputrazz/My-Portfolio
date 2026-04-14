import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import TestimonialSlider from '@/components/TestimonialSlider';

const Testimonials = () => {
  return (
    <section className="min-h-screen bg-primary/30 py-16 xl:py-24 flex items-center">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center mb-10 xl:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            What clients <span className="text-accent">say.</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-md mx-auto">
            Here&apos;s what some of my clients have to say about working together.
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;