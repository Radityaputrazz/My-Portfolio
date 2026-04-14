import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import {
  FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaPhp, FaKey
} from "react-icons/fa";
import {
  SiNextdotjs, SiPostgresql, SiMysql, SiJest
} from "react-icons/si";
import { RiServerFill } from "react-icons/ri";

const aboutData = [
  {
    title: "Skills",
    categories: [
      {
        category: "Frontend",
        skills: [
          { title: "HTML", icon: FaHtml5 },
          { title: "CSS", icon: FaCss3 },
          { title: "JavaScript", icon: FaJs },
          { title: "React", icon: FaReact },
          { title: "Next.js", icon: SiNextdotjs },
        ],
      },
      {
        category: "Backend",
        skills: [
          { title: "Node.js", icon: FaNodeJs },
          { title: "MySQL", icon: SiMysql },
          { title: "PostgreSQL", icon: SiPostgresql },
          { title: "PHP", icon: FaPhp },
          { title: "REST API", icon: RiServerFill },
          { title: "OAuth", icon: FaKey },
        ],
      },
      {
        category: "Supporting Skills",
        skills: [
          { title: "Git", icon: FaGitAlt },
          { title: "Jest", icon: SiJest },
        ],
      },
    ],
  },
  {
    title: "Experience",
    info: [
      { title: "Senior Full-Stack Developer — XYZ Company", stage: "2015 – 2023" },
      { title: "Intern — Bellagio Mansion", stage: "2024" },
      { title: "Intern — SMA CENDRAWASIH II", stage: "2022" },
    ],
  },
  {
    title: "Credentials",
    info: [
      { title: "Certified Full-Stack Developer", stage: "2024" },
      { title: "Bachelor of Informatics Engineering — Budi Luhur University", stage: "2024" },
      { title: "Algorithm Certified", stage: "2022" },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="min-h-screen bg-primary/30 py-16 xl:py-24 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-16 items-center xl:items-start">

          {/* Avatar — tengah di mobile, kiri di desktop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0 flex flex-col items-center gap-4 w-full xl:w-auto"
          >
            <div className="relative w-[160px] h-[200px] sm:w-[200px] sm:h-[260px] xl:w-[260px] xl:h-[380px] rounded-2xl overflow-hidden">
              <Image
                src="/ree.png"
                alt="Profile avatar"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="text-center">
              <h3 className="text-white font-semibold text-base sm:text-lg">Raditya Ananda</h3>
              <p className="text-white/50 text-xs sm:text-sm">Full-Stack Developer</p>
            </div>
          </motion.div>

          {/* Konten kanan */}
          <div className="flex-1 min-w-0 flex flex-col gap-6 w-full">

            {/* Heading & description */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold leading-snug mb-3 text-center xl:text-left">
                Building{" "}
                <span className="text-accent">robust web applications</span>{" "}
                that deliver real world results.
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed text-center xl:text-left">
                With a decade of experience as a{" "}
                <span className="text-accent">Full-Stack Developer</span>, I craft
                modern, responsive, and high-performance web applications that help
                businesses deliver outstanding digital solutions.
              </p>
            </motion.div>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full"
            >
              {/* Tab nav */}
              <div className="flex gap-4 sm:gap-6 mb-6 border-b border-white/10 pb-2 overflow-x-auto">
                {aboutData.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setIndex(idx)}
                    className={`text-sm sm:text-base pb-1 whitespace-nowrap transition-all duration-200 border-b-2 -mb-[2px]
                      ${index === idx
                        ? "text-accent border-accent font-semibold"
                        : "text-white/50 border-transparent hover:text-accent"
                      }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              {/* Skills tab */}
              {aboutData[index].title === "Skills" && (
                <div className="flex flex-col gap-5">
                  {aboutData[index].categories.map((cat, catIdx) => (
                    <div key={catIdx}>
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                        {cat.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill, i) => {
                          const Icon = skill.icon;
                          return (
                            <div
                              key={i}
                              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md px-3 py-2 text-xs sm:text-sm transition-colors duration-200"
                            >
                              {Icon && <Icon className="text-accent text-sm sm:text-base flex-shrink-0" />}
                              <span>{skill.title}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Experience & Credentials tab */}
              {aboutData[index].title !== "Skills" && (
                <div className="flex flex-col gap-3">
                  {aboutData[index].info.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white/5 border border-white/10 rounded-md px-4 py-3"
                    >
                      <p className="text-xs sm:text-sm font-medium leading-snug">{item.title}</p>
                      {item.stage && (
                        <p className="text-xs text-white/50 mt-1">{item.stage}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;