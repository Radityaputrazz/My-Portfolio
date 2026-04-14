import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

const navData = [
  { name: 'Home',         path: '/',             icon: <HiHome />,                       tooltip: 'Home' },
  { name: 'About',        path: '/about',         icon: <HiUser />,                       tooltip: 'About me' },
  { name: 'Services',     path: '/services',      icon: <HiRectangleGroup />,             tooltip: 'What I do' },
  { name: 'Work',         path: '/work',          icon: <HiViewColumns />,                tooltip: 'My projects' },
  { name: 'Testimonials', path: '/testimonials',  icon: <HiChatBubbleBottomCenterText />, tooltip: 'Clients' },
  { name: 'Contact',      path: '/contact',       icon: <HiEnvelope />,                   tooltip: 'Get in touch' },
];

const Nav = () => {
  const { pathname } = useRouter();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`relative flex items-center group hover:text-accent transition-all duration-300 ${
              link.path === pathname ? 'text-accent' : ''
            }`}
          >
            {/* Tooltip */}
            <div className="absolute right-0 hidden xl:group-hover:flex pr-14 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="relative flex items-center px-4 py-2 rounded-xl shadow-lg bg-gradient-to-r from-white/30 to-white/10 backdrop-blur-md border border-white/20 animate-pulse-glow">
                <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-pink-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
                  {link.tooltip}
                </span>
                <div className="absolute -right-2 w-0 h-0 border-l-8 border-l-white/30 border-y-8 border-y-transparent" />
              </div>
            </div>

            {/* Icon */}
            {link.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;