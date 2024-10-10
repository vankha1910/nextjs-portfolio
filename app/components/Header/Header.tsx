import Navbar from '../Navbar';

const Header = () => {
  return (
    <header className='h-[4em] md:h-[6em] flex items-center my-0 mx-auto justify-between sticky top-0 z-[99]'>
      <h3>
        <a href='#' className='link'>
          Kha
        </a>
      </h3>
      <Navbar></Navbar>
    </header>
  );
};

export default Header;
