import useFetch from './hooks/useFetch';
import config from '../config';
import Layout from './layout/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import Loader from './components/Loader';
import { Profile, Job, Project } from './types/dev';

import './app.css';

const App = () => {
  const { apiKey, baseUrl, userId } = config;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      api: apiKey,
    },
  };

  const { dev, loading, error } = useFetch(`${baseUrl}/api/v1/users/${userId}`, options);

  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return <Loader />;
  }

  type Dev = {
    profile: Profile,
    jobs: Job[],
    projects: Project[],
    email: string,
  };

  const {
    profile,
    jobs,
    projects,
    email,
  } = dev as Dev;

  return (
    <Layout profile={profile}>
      <>
        <Hero name={profile.name} resumeLink={profile.resume} />
        <About about={profile.about} profilePic={profile.profilePic} />
        <Experience jobs={jobs} />
        <Work projects={projects} />
        <Contact email={email} />
      </>
    </Layout>
  );
};

export default App;
