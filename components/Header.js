// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-4 sm:px-8 md:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 lg:gap-y-0 py-4 lg:py-8">
          
          {/* Logo */}
          <Link href={'/'} className="flex-shrink-0">
            <Image
              src="/logo2.svg"
              width={220}
              height={48}
              alt="Logo"
              priority
            />
          </Link>

          {/* Socials */}
          <div className="flex items-center">
            <Socials />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
