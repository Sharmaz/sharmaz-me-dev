import GithubIcon from '../assets/images/github_icon.svg';
import LinkedinIcon from '../assets/images/linkedin_icon.svg';
import TwitterIcon from '../assets/images/twitter_icon.svg';

const Footer = () => (
  <div className="py-4 mx-4 max-w-screen-lg md:pl-8 md:mx-auto flex justify-between items-center relative">
    <div className="bg-gradient-to-tl from-heliotrope via-dark-orchid to-metallic-blue w-full h-0.5 absolute top-0 left-0" />
    <span className="md:text-xl">
      © 2023 Ivan Robles
    </span>
    <div className="flex">
      <a href="#github" className="mr-2">
        <GithubIcon className="w-7 md:w-10 fill-gray-400 hover:fill-slate-300" />
      </a>
      <a href="#github" className="mr-2">
        <LinkedinIcon className="w-7 md:w-10 fill-gray-400 hover:fill-slate-300" />
      </a>
      <a href="#github">
        <TwitterIcon className="w-7 md:w-10 fill-gray-400 hover:fill-slate-300" />
      </a>
    </div>
  </div>
);

export default Footer;
