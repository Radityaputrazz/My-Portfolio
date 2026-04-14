import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowDownTray } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="relative w-[185px] h-[185px] flex flex-col justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src="/mycv.png"
          width={151}
          height={158}
          alt="Projects"
          className="animate-spin-slow w-full h-full max-w-[161px] max-h-[168px]"
        />

        <HiOutlineArrowDownTray className="absolute text-4xl text-accent group-hover:translate-y-2 group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;