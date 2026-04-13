// links
import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from 'react-icons/ri';

const socialsData = [
  { icon: <RiYoutubeLine />, href: '#' },
  { icon: <RiInstagramLine />, href: '#' },
  { icon: <RiFacebookLine />, href: '#' },
  { icon: <RiDribbbleLine />, href: '#' },
  { icon: <RiBehanceLine />, href: '#' },
  { icon: <RiPinterestLine />, href: '#' },
];

const Socials = () => {
  return (
    <div className="flex flex-wrap justify-center xl:justify-start items-center gap-4 md:gap- text-lg md:text-xl">
      {socialsData.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="hover:text-accent transition-all duration-300"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
