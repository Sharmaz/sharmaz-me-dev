import FolderIcon from '../assets/images/folder_alt_icon.svg';
import GithubIcon from '../assets/images/github_alt_icon.svg';
import ExternalIcon from '../assets/images/external_link_alt_icon.svg';

const Card = () => (
  <div className="work-card flex items-center justify-center  my-8 md:w-2/5">
    <div className="work-item rounded-2xl bg-background m-0.5">
      <div className="flex justify-between m-4">
        <FolderIcon className="w-16" />
        <div className="flex">
          <a href="#github" className="mr-2">
            <GithubIcon className="w-7 fill-slate-300" />
          </a>
          <a href="#external" className="mr-2">
            <ExternalIcon className="w-7 fill-slate-300" />
          </a>
        </div>
      </div>
      <h3 className="font-bold ml-4 text-slate-300">Web Dungeon VR</h3>
      <p className="m-4">
        VR exprience using the standar Web-XR with the framework A-frame.
      </p>
      <div className="flex text-sm text-slate-300">
        <span className="my-4 ml-4 purple-gradient rounded-full px-4">Javascript</span>
        <span className="my-4 ml-4 purple-gradient rounded-full px-4">A-frame</span>
      </div>
    </div>
  </div>
);

export default Card;
