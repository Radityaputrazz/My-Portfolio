// next image
import Image from 'next/image';

const Bulb = () => {
  return (
    <div
      className="
        relative 
        -left-16 sm:-left-20 md:-left-28 xl:-left-36
        -bottom-8 sm:-bottom-10 md:-bottom-12 xl:-bottom-12
        mix-blend-color-dodge
        animate-pulse duration-75
        z-10
        w-32 sm:w-40 md:w-52 xl:w-[260px]
        h-24 sm:h-32 md:h-44 xl:h-[200px]
      "
    >
      <Image
        src="/bulb.png"
        alt="Decorative Bulb"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};

export default Bulb;
