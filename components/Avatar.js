// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] xl:h-[678px] xl:flex xl:max-w-none hidden">
      <Image
        src="/ne.png"
        alt="Avatar Image"
        fill
        className="object-cover translate-z-0"
        priority
      />
    </div>
  );
};

export default Avatar;
