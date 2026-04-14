import Link from 'next/link';
import { RiYoutubeLine, RiInstagramLine, RiGithubLine, RiPinterestLine, RiThreadsLine } from 'react-icons/ri';

const socialsData = [
  { icon: <RiYoutubeLine />,  href: 'https://youtube.com' },
  { icon: <RiInstagramLine />, href: 'https://instagram.com/rdtyaptraa' },
  { icon: <RiGithubLine />,   href: 'https://github.com' },
  { icon: <RiPinterestLine />, href: 'https://pinterest.com' },
  { icon: <RiThreadsLine />, href: 'https://threads.net/@rdtyaptraa' },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-4 text-lg md:text-xl">
      {socialsData.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-all duration-300"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;