import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop } from "react-icons/si";

// about data
const aboutData = [
  {
    title: 'Skills',
    info: [
      { title: 'Web Development', icons: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaReact />, <SiNextdotjs />, <SiFramer />, <FaWordpress />] },
      { title: 'UI/UX Design', icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />] },
    ],
  },
  {
    title: 'Awards',
    info: [
      { title: 'Webby Awards - Honoree', stage: '2011 - 2012' },
      { title: 'Adobe Design Achievement - Finalist', stage: '2009 - 2010' },
    ],
  },
  {
    title: 'Experience',
    info: [
      { title: 'Senior Full-Stack Developer - XYZ Company', stage: '2015 - 2023' },
      { title: 'Frontend Developer - ABC Agency', stage: '2012 - 2015' },
      { title: 'Intern - DEF Corporation', stage: '2010 - 2012' },
    ],
  },
  {
    title: 'Credentials',
    info: [
      { title: 'B.Sc Computer Science - ABC University', stage: '2010' },
      { title: 'Certified Full-Stack Developer', stage: '2012' },
      { title: 'Adobe Certified Designer', stage: '2008' },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative bg-primary/30 text-white py-16 xl:py-24">
      <Circles />

      {/* Avatar */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        className="hidden xl:flex absolute top-1/2 -translate-y-1/2 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto flex flex-col xl:flex-row items-start gap-x-8">
        {/* Text & Counters */}
        <div className="flex-1 flex flex-col justify-start">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            className="h2 mb-6"
          >
            Building <span className="text-accent">scalable web applications</span> that turn ideas into reality.
          </motion.h2>

          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] text-gray-300 mb-8"
          >
            With over 10 years of experience as a Full-Stack Developer, I craft **modern, responsive, and high-performance web applications**, helping businesses deliver outstanding digital solutions.
          </motion.p>

          {/* Counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-x-6 gap-y-4"
          >
            <div className="flex-1 text-left">
              <div className="text-3xl xl:text-4xl font-extrabold text-accent">
                <CountUp start={0} end={10} duration={5} />+
              </div>
              <div className="text-xs text-gray-200 uppercase tracking-[1px]">Years Experience</div>
            </div>

            <div className="flex-1 text-left">
              <div className="text-3xl xl:text-4xl font-extrabold text-accent">
                <CountUp start={0} end={250} duration={5} />+
              </div>
              <div className="text-xs text-gray-200 uppercase tracking-[1px]">Clients Served</div>
            </div>

            <div className="flex-1 text-left">
              <div className="text-3xl xl:text-4xl font-extrabold text-accent">
                <CountUp start={0} end={650} duration={5} />+
              </div>
              <div className="text-xs text-gray-200 uppercase tracking-[1px]">Projects Completed</div>
            </div>

            <div className="flex-1 text-left">
              <div className="text-3xl xl:text-4xl font-extrabold text-accent">
                <CountUp start={0} end={8} duration={5} />+
              </div>
              <div className="text-xs text-gray-200 uppercase tracking-[1px]">Awards Won</div>
            </div>
          </motion.div>
        </div>

        {/* Info Tabs */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          className="flex flex-col w-full xl:max-w-[48%]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize xl:text-lg relative 
                  ${index === itemIndex ? 'text-accent after:w-full after:bg-accent' : 'text-white/60'}
                  after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className="flex flex-col md:flex-row gap-x-2 items-center text-white/60">
                <div className="font-light">{item.title}</div>
                {item.stage && <div className="hidden md:flex">-</div>}
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl text-white">{icon}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
