import { useState } from 'react';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [show, setShow] = useState(false);
  function showMenu() {
    setShow(!show);
    document.body.classList.toggle('overflow-hidden');
  }

  return (
    <header className="fixed w-full top-0 z-20 backdrop-blur">
      <nav className="flex items-center justify-between md:justify-evenly py-2 relative max-w-screen-lg mx-auto">
        <a href="/" className="ml-4 md:ml-0">
          <div className="flex items-center">
            <img src={logo} alt="Ivan Robles" width={48} />
            <h3 className="text-4xl md:text-2xl ml-2">Ivan Robles</h3>
          </div>
        </a>
        <div
          role="button"
          aria-hidden="true"
          className="menu-icon h-8 w-8 md:hidden mr-4 relative"
          onClick={showMenu}
        >
          <div className="hamburger-icon absolute h-8 w-8 left-0 top-4 flex flex-col items-center">
            <div className={`hamburger-element ${!show ? '-translate-y-3' : 'rotate-[40deg]'}`} />
            <div className={`hamburger-element ${!show ? '' : 'opacity-0'}`} />
            <div className={`hamburger-element ${!show ? 'translate-y-3' : '-rotate-[40deg]'}`} />
          </div>
        </div>
        <ul className="hidden md:flex text-xl">
          <li className="mx-2">
            <a href="#about" className="hover:drop-shadow-3xl">About</a>
          </li>
          <li className="mx-2">
            <a href="#experience" className="hover:drop-shadow-3xl">Experience</a>
          </li>
          <li className="mx-2">
            <a href="#work" className="hover:drop-shadow-3xl">Work</a>
          </li>
          <li className="mx-2">
            <a href="#contact" className="hover:drop-shadow-3xl">Contact</a>
          </li>
        </ul>
        <div className="button-purple hidden md:block  h-10 w-[132px]">
          <button type="button" className="hidden bg-background md:block w-32  p-1 text-xl rounded-full m-0.5">Resume</button>
        </div>
        <div className="purple-gradient w-full h-0.5 absolute bottom-0 left-0" />

        <nav className={`absolute w-full h-screen bg-background top-16 transition-opacity ease-in duration-300 ${!show ? 'opacity-0 translate-y-full ' : 'opacity-100 translate-y-0'}`}>
          <ul className="flex flex-col text-2xl ml-4">
            <li className="my-8">
              <a href="#about" onClick={showMenu}>About me</a>
            </li>
            <li className="my-8">
              <a href="#experience" onClick={showMenu}>Experience</a>
            </li>
            <li className="my-8">
              <a href="#work" onClick={showMenu}>Work</a>
            </li>
            <li className="my-8">
              <a href="#contact" onClick={showMenu}>Contact me</a>
            </li>
          </ul>
          <div className="button-purple ml-4 mt-4 w-[248px]">
            <button type="button" className="bg-background p-2 text-2xl rounded-full ml-1 my-1 w-60">Resume</button>
          </div>
        </nav>
      </nav>
    </header>
  );
};

export default Header;
