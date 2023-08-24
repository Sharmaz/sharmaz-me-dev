/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import Footer from '../components/Footer.tsx';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import Header from '../components/Header.tsx';

type LayoutProps = {
  children: JSX.Element | string,
  profile: {
    id: string,
    userId: string,
    name: string,
    profilePic: string,
    about: string,
    blog: string,
    github: string,
    linkedIn: string,
    twitter: string,
    resume: string,
  }
}

const Layout = ({ children, profile }: LayoutProps) => (
  <div>
    <Header resumeLink={profile.resume} />
    {children}
    <Footer
      name={profile.name}
      github={profile.github}
      linkedIn={profile.linkedIn}
      twitter={profile.twitter}
    />
  </div>
);

export default Layout;
