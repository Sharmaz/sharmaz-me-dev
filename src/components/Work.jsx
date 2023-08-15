import PropTypes from 'prop-types';
import Card from './Card';

const Work = ({ projects }) => (
  <section className="mx-4 my-10  max-w-screen-lg md:pl-8 md:mx-auto" id="work">
    { !projects.length
      ? <div>No Side Projects</div>
      : (
        <div className="project-list">
          <h2 className="subtitle">Side Projects</h2>
          <div className="my-8 md:flex md:flex-wrap md:justify-between md:w-full">
            {
              projects.map((project, index) => (
                <Card
                  key={`card_${index + 1}`}
                  name={project.name}
                  desc={project.description}
                  githubLink={project.githubLink}
                  demoLink={project.demoLink}
                  tags={project.tags.list}
                />
              ))
            }
          </div>
        </div>
      )}
  </section>
);

Work.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape),
};

Work.defaultProps = {
  projects: [
    {
      name: 'project_name',
      description: 'Project',
      githubLink: 'https://github.com/Sharmaz/project/',
      demoLink: 'https://sharmaz.github.io/project/',
      details: {
        list: [
          'Web',
          'Javascript',
        ],
      },
    },
  ],
};

export default Work;
