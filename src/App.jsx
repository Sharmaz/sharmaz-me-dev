import Layout from './layout/Layout';
import Hero from './components/Hero';
import About from './components/About';

import './app.css';
import Experience from './components/Experience';

const App = () => (
  <Layout>
    <>
      <Hero />
      <About />
      <Experience />
      <h1 className="font-bold">
        Welcome to Sharmaz Portfolio/Resume
      </h1>
    </>
  </Layout>
);

export default App;
