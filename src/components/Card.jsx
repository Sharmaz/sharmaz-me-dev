import FolderIcon from '../assets/images/folder_icon.svg?url';
import GithubIcon from '../assets/images/github_icon.svg';
import ExternalIcon from '../assets/images/open_icon.svg';

const Card = () => (
  <div className="work-card flex items-center justify-center  my-8 md:w-2/5">
    <div className="work-item rounded-2xl bg-background m-0.5">
      <div className="flex justify-between m-4">
        <img src={FolderIcon} alt="" />
        <div className="flex">
          <a href="#github" className="mr-2">
            <GithubIcon className="w-7 fill-gray-400" />
          </a>
          <a href="#external" className="mr-2">
            <ExternalIcon className="w-7 fill-gray-400" />
          </a>
        </div>
      </div>
      <h3 className="font-bold ml-4">Web Dungeon VR</h3>
      <p className="m-4">
        VR exprience using the standar Web-XR with the framework A-frame.
      </p>
      <div className="flex text-sm">
        <span className="m-4">Javascript</span>
        <span className="m-4">A-frame</span>
      </div>
    </div>
  </div>
);

export default Card;
