import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './layout.css';

const Layout = ({ children }) => (
  <div className="content">
    <Header />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
