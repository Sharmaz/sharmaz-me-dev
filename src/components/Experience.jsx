import { useState } from 'react';
import PropTypes from 'prop-types';
import decorationExperienceImage from '../assets/images/tea-cup-dynamic-gradient.webp';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Experience = ({ jobs }) => {
  const [active, setActive] = useState(0);
  const options = {
    root: null,
    rootMargin: '150px',
    threshold: 1.0,
  };

  const [containerRef, isVisible] = useIntersectionObserver(options);

  if (!jobs.length) {
    return <div>Experience Empty</div>;
  }

  return (
    <section className="mx-4 my-10  max-w-screen-lg md:pl-8 md:mx-auto relative" id="experience">
      <h2 className="subtitle">Experience</h2>
      <div ref={containerRef} className="experience-container flex flex-col md:flex-row justify-start md:items-start items-center mt-4 h-[630px] md:h-[450px]">
        <nav className="w-full md:w-1/3 mt-4 relative">
          <ul className="flex md:flex-col justify-between md:justify-start items-start text-lg">
            {
              jobs.map((job, i) => (
                <li
                  key={`job_${i + 1}`}
                  className={`${i === active ? 'relative z-10' : ''} md:ml-4`}
                >
                  <a className="no-underline text-slate-400 px-4" href={`#item${i + 1}`} onClick={() => setActive(i)}>
                    {job.name}
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
          jobs.map((job, i) => {
            if (i === active) {
              return (
                <article key={`job_${i + 2}`} className="text-base my-4 md:w-1/2">
                  <div className="my-4">{`[${job.dateStarted} - ${job.dateEnded}]`}</div>
                  <div className="my-4">{job.description}</div>
                  <div className="my-4">{`Role: ${job.role}`}</div>
                  <ul>
                    {job.details.list.map((task, index) => <li key={`task_${index + 1}`} className="text-base my-4 ml-8 before:content-['⬡'] before:-ml-8 before:mr-[13px] before:text-xl before:text-dark-orchid">{task}</li>)}
                  </ul>
                </article>
              );
            }
            return null;
          })
        }
      </div>
      <div className={`absolute -bottom-6 md:bottom-0 right-4 md:right-auto md:-left-16 lg:left-4 transition-all ease-in-out duration-300 ${isVisible ? 'md:opacity-100 md:translate-x-20' : 'md:opacity-0'}`}>
        <img className="w-28 md:w-4/5" src={decorationExperienceImage} alt="gradient hot cup" />
      </div>
    </section>
  );
};

Experience.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape),
};

Experience.defaultProps = {
  jobs: [
    {
      name: 'uplift',
      dateStarted: '2020-07-01',
      dateEnded: '2021-10-01',
      description: 'It is a payment method oriented to travel agencies.',
      role: 'Software Engineer',
      details: {
        list: [
          'Added features with react with context API as a state handler. I used Bootstrap and CSS for the styles.',
          'Adapting features. In another part of the project, I worked with ClojureScript and Reagent to use React in ClojureScript. This section was stylized with LESS.',
          'Bug fixing.',
        ],
      },
    },
  ],
};

export default Experience;
