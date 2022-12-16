import profilePic from '../assets/images/me.png';

const About = () => (
  <section className="mx-4 my-10  max-w-screen-lg md:pl-8 md:mx-auto" id="about">
    <h2 className="text-2xl md:text-4xl">About me</h2>
    <div className="about-container flex flex-col md:flex-row justify-center items-center">
      <p className="text-xl my-4 md:w-1/2">
        Ivan Robles specializes in technologies related to React,
        with several years of experience helping to create solid and
        scalable digital products and making elegant code.
        When I&apos;m not writing code,
        you&apos;ll find me knowing new places and people,
        hanging out with friends, reading books, or playing video games. But above all, learning.
      </p>
      <div className="about-picture flex justify-center items-center relative my-8 md:my-0 md:w-1/2">
        <img className="max-w-sm mx-auto h-80 rounded-2xl object-cover absolute z-10" src={profilePic} alt="Ivan Robles Pic" />
        <div className="w-80 max-w-sm mx-auto h-80 bg-purple-600 rounded-2xl rotate-12" />
      </div>
    </div>
  </section>
);

export default About;
