import Link from 'next/link';
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiGithubLine,
  RiPinterestLine,
  RiThreadsLine,
} from 'react-icons/ri';

const socialsData = [
  { icon: <RiYoutubeLine />,   href: 'https://youtube.com',              label: 'YouTube' },
  { icon: <RiInstagramLine />, href: 'https://instagram.com/rdtyaptraa', label: 'Instagram' },
  { icon: <RiGithubLine />,    href: 'https://github.com/Radityaputrazz', label: 'GitHub' },
  { icon: <RiPinterestLine />, href: 'https://pinterest.com',            label: 'Pinterest' },
  { icon: <RiThreadsLine />,   href: 'https://threads.net/@rdtyaptraa',  label: 'Threads' },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-3 sm:gap-4 text-lg sm:text-xl">
      {socialsData.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="relative group flex items-center justify-center
            w-9 h-9 sm:w-10 sm:h-10
            rounded-full border border-white/20
            hover:border-accent hover:text-accent hover:scale-110
            transition-all duration-300"
        >
          {item.icon}

          {/* Tooltip */}
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2
            text-[10px] font-medium text-white/70
            opacity-0 group-hover:opacity-100
            transition-all duration-300 whitespace-nowrap
            pointer-events-none">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;