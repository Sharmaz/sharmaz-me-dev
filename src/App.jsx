import useFetch from './hooks/useFetch';
import config from '../config';
import Layout from './layout/Layout';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Work from './components/Work';
import Contact from './components/Contact';
import Loader from './components/Loader.tsx';

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

  return (
    <Layout profile={dev.profile}>
      <>
        <Hero name={dev.profile.name} resumeLink={dev.profile.resume} />
        <About about={dev.profile.about} profilePic={dev.profile.profilePic} />
        <Experience jobs={dev.jobs} />
        <Work projects={dev.projects} />
        <Contact email={dev.email} />
      </>
    </Layout>
  );
};

export default App;
