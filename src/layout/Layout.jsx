import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
