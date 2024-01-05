import FolderIcon from '../assets/images/folder_alt_icon.svg';
import GithubIcon from '../assets/images/github_alt_icon.svg';
import ExternalIcon from '../assets/images/external_link_alt_icon.svg';

const tagClass = (index) => {
  if (index < 1) return 'tag-red';
  if (index > 1) return 'tag-purple';
  return 'tag-orange';
};

type CardProps = {
  name: string,
  desc: string,
  githubLink: string,
  demoLink: string,
  imageLink: string,
  tags: string[],
};

const Card = ({
  name,
  desc,
  githubLink,
  demoLink,
  imageLink,
  tags,
}: CardProps) => (
  <div className="work-card flex items-center justify-center  my-8 md:w-[46%]">
    <div className="work-item rounded-2xl bg-background m-0.5 w-full">
      <div className="flex justify-between m-4">
        {
          !imageLink
            ? <FolderIcon className="w-16" />
            : <img src={imageLink} className="aspect-video object-cover rounded" alt="" />
        }
      </div>
      <div className="flex text-sm text-slate-300">
        {
          tags
            ? tags.map((tag, index) => (
              <div key={`tag_${index + 1}`} className={`ml-4 my-4 px-[2px] flex justify-center align-middle text-center ${tagClass(index)}`}>
                <span className="block bg-background px-4 rounded-full my-[2px]">{tag}</span>
              </div>
            ))
            : <span />
        }
      </div>
      <h3 className="font-bold ml-4 text-slate-300">{name}</h3>
      <p className="m-4">
        {desc}
      </p>
      <div className="ml-4 mb-4">
        <a href={githubLink} aria-label="Github Repo" className="mr-2 flex underline-link">
          Github Repository
          <GithubIcon className="w-5 ml-2 fill-slate-300" />
        </a>
        <a href={demoLink} aria-label="Demo" className="mr-2 flex underline-link">
          Demo
          <ExternalIcon className="w-5 ml-2 fill-slate-300" />
        </a>
      </div>
    </div>
  </div>
);

export default Card;
