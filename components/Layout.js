import { Sora } from 'next/font/google';
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Layout = ({ children }) => {
  return (
    <div className={`page bg-site bg-cover text-white ${sora.variable} font-sora relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;