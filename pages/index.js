import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar"; 

const ParticlesContainer = dynamic(
  () => import("../components/ParticlesContainer"),
  { ssr: false }
);

const Home = () => {
  return (
    <div className="relative h-screen bg-primary/60 overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-black/30 to-black/10" />

      <div className="relative z-10 flex flex-col justify-center h-full container mx-auto text-center xl:text-justify xl:pt-40">
        
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h1"
        >
          Turning Ideas <br />
          Into{" "}
          <span className="text-rose-600 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] [text-shadow:1px_1px_3px_black]">
            Full-Stack <br /> Web Developer
          </span>
        </motion.h1>

        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
        >
          I craft modern and scalable web solutions, combining intuitive frontend
          interfaces with powerful backend architecture and reliable APIs to deliver
          exceptional digital experiences.
        </motion.p>

        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex justify-center xl:justify-start"
        >
          <ProjectsBtn />
        </motion.div>
      </div>

      
      <div className="absolute inset-0 flex justify-end items-end">
     
        <div className="hidden xl:block xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0" />

        <div className="hidden xl:block w-full h-full absolute">
          <ParticlesContainer />
        </div>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute -bottom-20 lg:bottom-0 lg:right-[8%] w-full max-w-[737px] max-h-[678px] pointer-events-none"
        >
          <Avatar /> 
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
