import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowDownTray } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="relative
          w-[140px] h-[140px]
          sm:w-[160px] sm:h-[160px]
          xl:w-[185px] xl:h-[185px]
          flex flex-col justify-center items-center
          bg-circleStar bg-cover bg-center bg-no-repeat
          group"
      >
        <Image
          src="/mycv.png"
          width={161}
          height={168}
          alt="Projects"
          className="animate-spin-slow w-full h-full
            max-w-[120px] max-h-[130px]
            sm:max-w-[140px] sm:max-h-[148px]
            xl:max-w-[161px] xl:max-h-[168px]"
        />

        <HiOutlineArrowDownTray
          className="absolute text-3xl sm:text-4xl text-accent
            group-hover:translate-y-2 group-hover:scale-125
            transition-all duration-300 drop-shadow-lg"
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;