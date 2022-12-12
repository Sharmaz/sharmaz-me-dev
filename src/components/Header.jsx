import { useState } from 'react';
import logo from '../assets/images/logo.png';
import MenuIcon from '../assets/images/menu_icon.svg?url';
import CloseMenuIcon from '../assets/images/menu_close_icon.svg?url';

const Header = () => {
  const [show, setShow] = useState(false);
  function showMenu() {
    setShow(!show);
  }

  return (
    <header className="relative">
      <nav className="flex items-center justify-evenly  py-2 relative max-w-screen-lg mx-auto">
        <img src={logo} alt="Ivan Robles" width={48} />
        <h3 className="text-4xl md:text-2xl">Ivan Robles</h3>
        <div
          role="button"
          aria-hidden="true"
          className="menu-icon w-10 h-10 md:hidden"
          onClick={showMenu}
        >
          <img src={show ? CloseMenuIcon : MenuIcon} alt="menu icon" />
        </div>
        <ul className="hidden md:flex text-xl">
          <li className="mx-2">
            <a href="#about" className="no-underline text-slate-400">About</a>
          </li>
          <li className="mx-2">
            <a href="#work" className="no-underline text-slate-400">Work</a>
          </li>
          <li className="mx-2">
            <a href="#experience" className="no-underline text-slate-400">Experience</a>
          </li>
          <li className="mx-2">
            <a href="#contact" className="no-underline text-slate-400">Contact</a>
          </li>
        </ul>
        <div className="button-purple hidden md:block  h-10 w-[132px]">
          <button type="button" className="hidden bg-background md:block w-32  p-1 text-xl rounded-full m-0.5">Resume</button>
        </div>
        <div className="bg-gradient-to-tl from-heliotrope via-dark-orchid to-metallic-blue w-full h-0.5 absolute bottom-0 left-0" />
        {
          show ? (
            <nav className="absolute w-full h-screen bg-background top-16">
              <ul className="flex flex-col text-2xl ml-4">
                <li className="my-8">
                  <a href="#about" className="no-underline text-slate-400">About me</a>
                </li>
                <li className="my-8">
                  <a href="#experience" className="no-underline text-slate-400 my-8">Experience</a>
                </li>
                <li className="my-8">
                  <a href="#work" className="no-underline text-slate-400 my-8">Work</a>
                </li>
                <li className="my-8">
                  <a href="#contact" className="no-underline text-slate-400 my-8">Contact me</a>
                </li>
              </ul>
              <div className="button-purple ml-4 mt-4 w-[248px]">
                <button type="button" className="bg-background p-2 text-2xl rounded-full ml-1 my-1 w-60">Resume</button>
              </div>
            </nav>
          )
            : null
        }
      </nav>
    </header>
  );
};

export default Header;
