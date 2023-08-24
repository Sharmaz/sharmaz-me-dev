import React from 'react';
import Card from './Card';
import { Project } from '../types/dev';

const Work: React.FC<{ projects: Project[] }> = ({ projects }) => (
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
                  tags={project.tags?.list ? project.tags.list : []}
                />
              ))
            }
          </div>
        </div>
      )}
  </section>
);

export default Work;
