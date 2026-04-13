import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowDownTray } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="relative w-[185px] h-[185px] flex flex-col justify-center items-center
        bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        {/* Rotating circular text */}
        <Image
          src="/rounded-text.png"
          width={141}
          height={148}
          alt="Projects"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />

        {/* Arrow icon */}
        <HiOutlineArrowDownTray
          className="absolute text-4xl text-accent group-hover:translate-y-2 
          group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
        />

        {/* Label text */}
        <span className="absolute bottom-4 text-sm text-white/80 font-semibold tracking-wide 
          group-hover:text-accent transition-colors duration-300">
        </span>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
