import Image from "next/image";

const Avatar = () => {
  return (
    <div className="relative hidden xl:flex w-full h-[500px] md:h-[700px] xl:h-[850px] max-w-none">
      <Image
        src="/ree.png"
        alt="Avatar"
        fill
        className="object-cover translate-z-0"
        priority
      />
    </div>
  );
};

export default Avatar;