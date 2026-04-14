import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute top-0 left-0 z-10 w-[200px] xl:w-[400px] opacity-50 mix-blend-color-dodge animate-floatY pointer-events-none">
      <Image
        src="/top-left-img.png"
        width={400}
        height={400}
        alt="Decorative top left"
        className="w-full h-auto object-contain"
      />
    </div>
  );
};

export default TopLeftImg;