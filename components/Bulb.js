import Image from 'next/image';
import { motion } from 'framer-motion';

const Bulb = () => {
  return (
    <motion.div
      className="absolute bottom-4 left-1/2 -translate-x-1/2 mix-blend-color-dodge z-10 w-32 sm:w-40 md:w-52 xl:w-[260px] h-24 sm:h-32 md:h-44 xl:h-[200px]"
      whileHover={{ scale: 1.05, opacity: 0.9 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <Image
        src="/bulb.png"
        alt="Decorative bulb"
        fill
        className="object-contain"
        priority
      />
    </motion.div>
  );
};

export default Bulb;