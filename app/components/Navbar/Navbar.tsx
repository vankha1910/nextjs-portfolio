import Link from 'next/link';
import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '../context';
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [showNavList, setShowNavList] = React.useState(false);
  const toggleNavList = () => setShowNavList(!showNavList);

  const handleCloseNavList = () => {
    if (showNavList) setShowNavList(false);
  };
  return (
    <nav className={`flex gap-6 items-baseline `}>
      <ul
        className={` sm:flex gap-4 ${
          showNavList
            ? 'fixed inset-0 z-10 flex flex-col items-center justify-center'
            : 'hidden'
        }`}
      >
        <li
          onClick={handleCloseNavList}
          className='link link--nav cursor-pointer'
        >
          <Link href={'#projects'}>Projects</Link>
        </li>
        <li
          onClick={handleCloseNavList}
          className='link link--nav cursor-pointer'
        >
          <Link href={'#skills'}>Skills</Link>
        </li>
        <li
          onClick={handleCloseNavList}
          className='link link--nav cursor-pointer'
        >
          <Link href={'#experience'}>Experience</Link>
        </li>
        <li
          onClick={handleCloseNavList}
          className='link link--nav cursor-pointer'
        >
          <Link href={'#contact'}>Contact</Link>
        </li>
      </ul>
      <button
        onClick={toggleTheme}
        className='link--icon transition-transform duration-500 ease-in-out'
      >
        <span
          key={theme}
          className='inline-block transform transition-transform duration-500 ease-in-out rotate-0'
        >
          {theme === 'dark' ? (
            <WbSunnyIcon className='transform rotate-180' />
          ) : (
            <NightlightIcon className='transform rotate-180' />
          )}
        </span>
      </button>
      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger block sm:hidden z-10'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
