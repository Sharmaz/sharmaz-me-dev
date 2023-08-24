type AboutProps = {
  about: string,
  profilePic: string,
};

const About = ({ about, profilePic }: AboutProps) => (
  <section className="mx-4 my-10  max-w-screen-lg md:pl-8 md:mx-auto" id="about">
    <h2 className="subtitle">About me</h2>
    <div className="about-container flex flex-col md:flex-row justify-center items-center">
      <p className="text-xl my-4 md:w-1/2">
        { about }
      </p>
      <div className="about-picture flex justify-center items-center relative my-8 md:my-0 md:w-1/2">
        <img className="max-w-sm mx-auto h-80 rounded-2xl object-cover absolute z-10" src={profilePic} alt="Ivan Robles Pic" />
        <div className="purple-gradient w-72 md:w-80 max-w-sm mx-auto h-80 rounded-2xl rotate-12" />
      </div>
    </div>
  </section>
);

export default About;
