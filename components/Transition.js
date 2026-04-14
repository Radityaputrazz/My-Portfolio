import { AnimatePresence, motion } from 'framer-motion';

const transitionVariants = {
  initial: { x: '100%', width: '100%' },
  animate: { x: '0%', width: '0%' },
  exit: { x: ['0%', '100%'], width: ['0%', '100%'] },
};

const layers = [
  { bg: '#2e2257', delay: 0.2, z: 'z-30' },
  { bg: '#3b2d71', delay: 0.4, z: 'z-20' },
  { bg: '#4b3792', delay: 0.6, z: 'z-10' },
];

const Transition = () => {
  return (
    <AnimatePresence>
      {layers.map((layer) => (
        <motion.div
          key={layer.bg}
          className={`fixed top-0 bottom-0 right-full w-screen h-screen ${layer.z} bg-[${layer.bg}]`}
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: layer.delay, duration: 0.6, ease: 'easeInOut' }}
        />
      ))}
    </AnimatePresence>
  );
};

export default Transition;