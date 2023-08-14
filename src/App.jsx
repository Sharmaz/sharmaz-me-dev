import { useState, useEffect } from 'react';
import config from '../config';
import Layout from './layout/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';

import './app.css';

const App = () => {
  const [dev, setDev] = useState({});
  const { apiKey, baseUrl, userId } = config;

  useEffect(async () => {
    const response = await fetch(`${baseUrl}/api/v1/users/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        api: apiKey,
      },
    });
    const data = await response.json();
    setDev(data);
  }, []);

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
