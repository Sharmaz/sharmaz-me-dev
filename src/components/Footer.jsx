import githubIcon from '../assets/images/github_icon.svg';
import linkedinIcon from '../assets/images/linkedin_icon.svg';
import twitterIcon from '../assets/images/twitter_icon.svg';

const Footer = () => (
  <div className="border-t-2 border-t-gray-400 py-4 mx-4 max-w-screen-lg md:pl-8 md:mx-auto flex justify-between items-center">
    <span className="md:text-xl">
      © 2023 Ivan Robles
    </span>
    <div className="flex">
      <a href="#github" className="mr-2">
        <img src={githubIcon} alt="" className="w-7 md:w-10" />
      </a>
      <a href="#github" className="mr-2">
        <img src={linkedinIcon} alt="" className="w-7 md:w-10" />
      </a>
      <a href="#github">
        <img src={twitterIcon} alt="" className="w-7 md:w-10" />
      </a>
    </div>
  </div>
);

export default Footer;
