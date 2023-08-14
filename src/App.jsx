import useFetch from './hooks/useFetch';
import config from '../config';
import Layout from './layout/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';

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
    return <div>Loading...</div>;
  }

  return (
    <Layout profile={dev.profile}>
      <>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </>
    </Layout>
  );
};

export default App;
