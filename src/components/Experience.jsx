import { useState } from 'react';

const Experience = () => {
  const projects = [
    {
      title: 'House Call Pro',
      date: 'April 2022 - August 2022',
      description: 'Service management platform to help manage and grow home service businesses.',
      role: 'Software Engineer',
      tasks: [
        'Added features with React and Typescript. I used MaterialUI and for the styles, and React Testing Library with Jest for testing.',
        'Helping different teams to deliver features for Homepage, Pipeline and Reporting.',
        'Bug fixing.',
      ],
    },
    {
      title: 'Uplift',
      date: 'Jul 2021 - Oct 2021',
      description: 'It is a payment method oriented to travel agencies.',
      role: 'Software Engineer',
      tasks: [
        'Added features with react with context API as a state handler. I used Bootstrap and CSS for the styles.',
        'Adapting features. In another part of the project, I worked with ClojureScript and Reagent to use React in ClojureScript. This section was stylized with LESS.',
        'Bug fixing.',
      ],
    },
    {
      title: 'Modcloth',
      date: 'Jun 2020 - Apr 2021',
      description: 'This project is an e-commerce clothing store built in salesforce storefront. The code was Legacy in most of the parts.',
      role: 'Software Engineer',
      tasks: [
        'Maintaing legacy code with vanilla JS, JQuery, JQuery-UI, and elsewhere in React Oldie (class components).',
        'Added features. In style terms, I worked with Bootstrap and MaterialUI using SASS.',
        'Added features in the update to move the store to a new stack. It was a Proof of Concept. We used React with hooks, NextJS with Contentstack, and CommerceTools. The POC was stylized with Bootstrap and SASS.',
        'Bug fixing.',
      ],
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="mx-4 my-10  max-w-screen-lg md:pl-8 md:mx-auto" id="experience">
      <h2 className="subtitle">Experience</h2>
      <div className="experience-container flex flex-col md:flex-row justify-center md:justify-start md:items-start items-center mt-4">
        <nav className="w-full md:w-1/3 mt-4 relative">
          <ul className="flex md:flex-col justify-between md:justify-start items-start text-lg">
            {
              projects.map((project, i) => (
                <li
                  className={`${i === active ? 'relative z-10' : ''} md:ml-4`}
                >
                  <a className="no-underline text-slate-400 px-4" href={`#item${i + 1}`} onClick={() => setActive(i)}>
                    {project.title}
                  </a>
                  {
                    active === i
                      ? <div className="bg-dark-orchid w-full md:w-0.5 h-0.5 md:h-full absolute bottom-0 left-0 md:-left-4 shadow-[0_0px_5px_0px_rgba(0,0,0,1)] shadow-heliotrope" />
                      : null
                  }
                </li>
              ))
            }
          </ul>
          <div className="bg-gray-400 opacity-50 w-full md:w-0.5 h-0.5 md:h-full absolute bottom-0 left-0" />
        </nav>
        {
          projects.map((project, i) => {
            if (i === active) {
              return (
                <article className="text-base my-4 md:w-1/2">
                  <div className="my-4">{`[${project.date}]`}</div>
                  <div className="my-4">{project.description}</div>
                  <div className="my-4">{`Role: ${project.role}`}</div>
                  <ul>
                    {project.tasks.map((task) => <li className="text-base my-4 ml-8 before:content-['⬡'] before:-ml-8 before:mr-[13px] before:text-xl before:text-dark-orchid">{task}</li>)}
                  </ul>
                </article>
              );
            }
            return null;
          })
        }
      </div>
    </section>
  );
};

export default Experience;
