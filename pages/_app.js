import "@/styles/globals.css";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "next-themes";

import Layout from "@/components/Layout";
import Transition from "@/components/Transition";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Transition />
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            className="h-full"
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;