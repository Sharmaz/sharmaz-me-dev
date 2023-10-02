import FolderIcon from '../assets/images/folder_alt_icon.svg';
import GithubIcon from '../assets/images/github_alt_icon.svg';
import ExternalIcon from '../assets/images/external_link_alt_icon.svg';

type CardProps = {
  name: string,
  desc: string,
  githubLink: string,
  demoLink: string,
  tags: string[],
};

const Card = ({
  name,
  desc,
  githubLink,
  demoLink,
  tags,
}: CardProps) => (
  <div className="work-card flex items-center justify-center  my-8 md:w-2/5">
    <div className="work-item rounded-2xl bg-background m-0.5 w-full">
      <div className="flex justify-between m-4">
        <FolderIcon className="w-16" />
        <div className="flex">
          <a href={githubLink} aria-label="Github Repo" className="github-repo mr-2">
            <GithubIcon className="w-7 fill-slate-300" />
          </a>
          <a href={demoLink} aria-label="Demo" className="demo-link mr-2">
            <ExternalIcon className="w-7 fill-slate-300" />
          </a>
        </div>
      </div>
      <h3 className="font-bold ml-4 text-slate-300">{name}</h3>
      <p className="m-4">
        {desc}
      </p>
      <div className="flex text-sm text-slate-300">
        {
          tags
            ? tags.map((tag, index) => <span key={`tag_${index + 1}`} className="my-4 ml-4 purple-gradient rounded-full px-4">{tag}</span>)
            : <span />
        }
      </div>
    </div>
  </div>
);

export default Card;