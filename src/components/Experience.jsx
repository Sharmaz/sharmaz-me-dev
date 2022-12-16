import { useState } from 'react';

const Experience = () => {
  const projects = ['House Call Pro', 'Uplift', 'Modcloth'];
  const [active, setActive] = useState(0);

  return (
    <section className="mx-4 my-10  max-w-screen-lg md:pl-8 md:mx-auto" id="experience">
      <h2 className="text-2xl md:text-4xl">Experience</h2>
      <div className="experience-container flex flex-col md:flex-row justify-center md:justify-start md:items-start items-center mt-4">
        <nav className="w-full md:w-1/3 border-b-2 border-b-gray-400 md:border-b-transparent md:border-l-2 md:border-l-gray-400 mt-4">
          <ul className="flex md:flex-col justify-between md:justify-start items-start text-lg">
            {
              projects.map((project, i) => <li className="md:ml-4"><a className="no-underline text-slate-400" href={`#item${i + 1}`} onClick={() => setActive(i)}>{project}</a></li>)
            }
          </ul>
        </nav>
        {
          active === 0
            ? (
              <article className="text-xl my-4 md:w-1/2">
                [April 2022 - August 2022]
                Service management platform to help manage and grow home service businesses.
                Role: Software Engineer
                <ul>
                  <li>
                    Added features with React and Typescript.
                    I used MaterialUI and for the styles,
                    and React Testing Library with Jest for testing.
                  </li>
                  <li>
                    Helping different teams to deliver features for Homepage,
                    Pipeline and Reporting.
                  </li>
                  <li>Bug fixing.</li>
                </ul>
              </article>
            )
            : null
        }
        {
          active === 1
            ? (
              <article className="text-xl my-4 md:w-1/2">
                [Jul 2021 - Oct 2021]
                Role: Software Engineer
                It is a payment method oriented to travel agencies.
                <ul>
                  <li>
                    Added features with react with context API as a state handler.
                    I used Bootstrap and CSS for the styles.
                  </li>
                  <li>
                    Adapting features. In another part of the project,
                    I worked with ClojureScript and Reagent to use React in ClojureScript.
                    This section was stylized with LESS.
                  </li>
                  <li>Bug fixing.</li>
                </ul>
              </article>
            )
            : null
        }
        {
          active === 2
            ? (
              <article className="text-xl my-4 md:w-1/2">
                [Jun 2020 - Apr 2021]
                Role: Software Engineer
                This project is an e-commerce clothing store built in salesforce storefront.
                The code was Legacy in most of the parts.
                <ul>
                  <li>
                    Maintaing legacy code with vanilla JS, JQuery, JQuery-UI,
                    and elsewhere in React Oldie (class components).
                  </li>
                  <li>
                    Added features. In style terms,
                    I worked with Bootstrap and MaterialUI using SASS.
                  </li>
                  <li>
                    Added features in the update to move the store to a new stack.
                    It was a Proof of Concept. We used React with hooks, NextJS with Contentstack,
                    and CommerceTools. The POC was stylized with Bootstrap and SASS.
                  </li>
                  <li>Bug fixing.</li>
                </ul>
              </article>
            )
            : null
        }
      </div>
    </section>
  );
};

export default Experience;
