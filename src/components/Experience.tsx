import React, { useState, useRef } from 'react';
import decorationExperienceImage from '../assets/images/tea-cup-dynamic-gradient.webp';
import decorationExperienceImageSmall from '../assets/images/tea-cup-dynamic-gradient-small.webp';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { Job } from '../types/dev';

const Experience: React.FC<{ jobs: Job[] }> = ({ jobs }) => {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  if (!jobs.length) {
    return <div>Experience Empty</div>;
  }

  const sortedJobs = jobs.sort((job1, job2) => {
    if (job1.dateStarted < job2.dateStarted) {
      return 1;
    } if (job1.dateStarted > job2.dateStarted) {
      return -1;
    }
    return 0;
  });

  return (
    <section className="mx-4 my-10  max-w-screen-lg md:pl-8 md:mx-auto relative" id="experience">
      <h2 className="subtitle">Experience</h2>
      <div ref={ref} className="experience-container flex flex-col md:flex-row justify-start md:items-start items-center mt-4 h-[630px] md:h-[450px]">
        <nav className="w-full md:w-1/3 mt-4 relative">
          <ul className="flex md:flex-col justify-between md:justify-start items-start text-lg">
            {
              sortedJobs.map((job: Job, i: number) => (
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
          sortedJobs.map((job: Job, i: number) => {
            if (i === active) {
              return (
                <article key={`job_${i + 2}`} className="text-base my-4 md:w-1/2">
                  <div className="my-4">{`[${job.dateStarted} - ${job.dateEnded}]`}</div>
                  <div className="my-4">{job.description}</div>
                  <div className="my-4">{`Role: ${job.role}`}</div>
                  <ul>
                    {
                      job.details && job.details.list?.length
                        ? job.details.list.map((task, index) => <li key={`task_${index + 1}`} className="text-base my-4 ml-8 before:content-['⬡'] before:-ml-8 before:mr-[13px] before:text-xl before:text-dark-orchid">{task}</li>)
                        : null
                      }
                  </ul>
                </article>
              );
            }
            return null;
          })
        }
      </div>
      <div className={`absolute -bottom-6 md:bottom-0 right-4 md:right-auto md:-left-16 lg:left-4 transition-all ease-in-out duration-300 ${isVisible ? 'md:opacity-100 md:translate-x-20' : 'md:opacity-0'}`}>
        <img
          className="w-28 md:w-4/5"
          srcSet={`${decorationExperienceImageSmall} 112w, ${decorationExperienceImage} 800w`}
          sizes="(max-width: 767px) 112px, 800px"
          src={decorationExperienceImage}
          width={218}
          height={228}
          alt="gradient hot cup"
        />
      </div>
    </section>
  );
};

export default Experience;
