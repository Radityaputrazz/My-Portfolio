// pages/_app.js
import "@/styles/globals.css"; // ✅ Hanya di sini

import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import Transition from "@/components/Transition";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

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
