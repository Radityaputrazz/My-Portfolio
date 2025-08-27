import '../styles/globals.css';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  return (
    <Layout>
      {/* Transition component is outside AnimatePresence, it runs globally */}
      <Transition />

      {/* AnimatePresence for page transitions */}
      <AnimatePresence mode='wait'>
        {/* Wrap only the page content with motion.div */}
        <motion.div 
          key={router.route} 
          className='h-full' 
          initial="initial" 
          animate="animate" 
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
