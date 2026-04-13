// next image
import Image from "next/image";

const HeroDecorations = () => {
  return (
    <div className="relative w-full h-full">
      {/* Bulb */}
      <div
        className="
          absolute
          -left-16 sm:-left-20 md:-left-28 xl:-left-36
          -bottom-8 sm:-bottom-10 md:-bottom-12 xl:-bottom-12
          w-32 sm:w-40 md:w-52 xl:w-[260px]
          h-24 sm:h-32 md:h-44 xl:h-[200px]
          mix-blend-color-dodge
          animate-bounce-slow
          z-10
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

      {/* Circles */}
      <div
        className="
          absolute
          -right-8 sm:-right-12 md:-right-16 xl:-right-16
          -bottom-1 sm:-bottom-2 md:-bottom-2 xl:-bottom-2
          w-40 sm:w-48 md:w-56 xl:w-[300px]
          h-32 sm:h-40 md:h-48 xl:h-[200px]
          mix-blend-color-dodge
          animate-bounce-slow
          z-10
        "
      >
        <Image
          src="/circles.png"
          alt="Decorative Circles"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default HeroDecorations;
