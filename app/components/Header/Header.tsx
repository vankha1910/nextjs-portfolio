import Image from 'next/image';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <header className='h-[4em] md:h-[6em] flex items-center my-0 mx-auto justify-between sticky top-0 z-[99]'>
      <h3>
        <a href='#' className='link'>
          <Image
            src='/logo/logo-dark.png'
            alt='logo'
            width={64}
            height={64}
            className='hidden dark:block'
          ></Image>
          <Image
            src='/logo/logo-light.png'
            alt='logo'
            width={64}
            height={64}
            className='block dark:hidden'
          ></Image>
        </a>
      </h3>
      <Navbar></Navbar>
    </header>
  );
};

export default Header;
