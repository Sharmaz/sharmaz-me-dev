import folerIcon from '../assets/images/folder_icon.svg';
import githubIcon from '../assets/images/github_icon.svg';
import openIcon from '../assets/images/open_icon.svg';

const Work = () => (
  <section className="mx-4 my-10  max-w-screen-lg md:pl-8 md:mx-auto">
    <h2 className="text-2xl md:text-4xl">Work</h2>
    <div className="my-8 md:flex md:flex-wrap md:justify-between md:w-full">
      <div className="work-item border-2 border-slate-500 rounded-2xl my-8 md:w-2/5">
        <div className="flex justify-between m-4">
          <img src={folerIcon} alt="" />
          <div className="flex">
            <img className="mx-2" src={githubIcon} alt="" />
            <img className="mx-2" src={openIcon} alt="" />
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
      <div className="work-item border-2 border-slate-500 rounded-2xl my-8 md:w-2/5">
        <div className="flex justify-between m-4">
          <img src={folerIcon} alt="" />
          <div className="flex">
            <img className="mx-2" src={githubIcon} alt="" />
            <img className="mx-2" src={openIcon} alt="" />
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
      <div className="work-item border-2 border-slate-500 rounded-2xl my-8 md:w-2/5">
        <div className="flex justify-between m-4">
          <img src={folerIcon} alt="" />
          <div className="flex">
            <img className="mx-2" src={githubIcon} alt="" />
            <img className="mx-2" src={openIcon} alt="" />
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
      <div className="work-item border-2 border-slate-500 rounded-2xl my-8 md:w-2/5">
        <div className="flex justify-between m-4">
          <img src={folerIcon} alt="" />
          <div className="flex">
            <img className="mx-2" src={githubIcon} alt="" />
            <img className="mx-2" src={openIcon} alt="" />
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
  </section>
);

export default Work;
