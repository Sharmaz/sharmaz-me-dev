import { useState } from 'react';
import logo from '../assets/images/logo.png';
import menuIcon from '../assets/images/menu_icon.svg';
import closeMenuIcon from '../assets/images/menu_close_icon.svg';

const Header = () => {
  const [show, setShow] = useState(false);
  function showMenu() {
    setShow(!show);
  }

  return (
    <nav className="flex items-center justify-evenly border-b-2 border-b-gray-400 py-2 relative">
      <img src={logo} alt="Ivan Robles" width={48} />
      <h3 className="text-4xl">Ivan Robles</h3>
      <div
        role="button"
        aria-hidden="true"
        className="menu-icon w-10 h-10"
        onClick={showMenu}
      >
        <img src={show ? closeMenuIcon : menuIcon} alt="menu icon" />
      </div>
      <ul className="xs:hidden">
        <li>About me</li>
        <li>Experience</li>
        <li>Portfolio</li>
        <li>Contact me</li>
      </ul>
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
            <button type="button" className="w-48 bg-transparent border-2 border-slate-500 p-2 text-2xl rounded-full ml-4 mt-8">Resume</button>
          </nav>
        )
          : null
      }
    </nav>
  );
};

export default Header;
