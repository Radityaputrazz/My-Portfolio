import Image from 'next/image';
import Link from 'next/link';
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-4 sm:px-8 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center py-4 xl:py-6">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo2.svg"
              width={160}
              height={40}
              alt="Logo"
              priority
              className="w-[130px] sm:w-[160px] xl:w-[220px] h-auto"
            />
          </Link>

          {/* Socials */}
          <Socials />

        </div>
      </div>
    </header>
  );
};

export default Header;