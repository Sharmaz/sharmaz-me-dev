import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({ children, profile }) => (
  <div>
    <Header />
    {children}
    <Footer
      name={profile.name}
      github={profile.github}
      linkedIn={profile.linkedIn}
      twitter={profile.twitter}
    />
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string,
    github: PropTypes.string,
    linkedIn: PropTypes.string,
    twitter: PropTypes.string,
  }),
};

Layout.defaultProps = {
  profile: {
    name: 'Albert Einstein',
    profilePic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg',
    about: 'The greatest and most influential scientists of all time.',
    blog: 'htps://wordpress.com/',
    github: 'https://github.com/',
    linkedIn: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
  },
};

export default Layout;
