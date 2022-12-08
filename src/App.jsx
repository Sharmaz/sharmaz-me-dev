import Layout from './layout/Layout';
import Hero from './components/Hero';
import About from './components/About';

import './app.css';

const App = () => (
  <Layout>
    <Hero />
    <About />
    <h1 className="font-bold">
      Welcome to Sharmaz Portfolio/Resume
    </h1>
  </Layout>
);

export default App;
