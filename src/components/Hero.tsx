import PropTypes from 'prop-types';
import decorationHeroImage from '../assets/images/cup-dynamic-gradient.webp';
import decorationHeroImageSmall from '../assets/images/cup-dynamic-gradient-small.webp';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

type HeroProps = {
  name: string,
  resumeLink: string,
};

const Hero = ({ name, resumeLink }: HeroProps) => {
  const options = {
    root: null,
    rootMargin: '150px',
    threshold: 1.0,
  };

  const [containerRef, isVisible] = useIntersectionObserver(options);

  return (
    <section ref={containerRef} className="text-2xl text-slate-300 mx-4 mb-10 mt-36 md:text-5xl max-w-screen-lg md:pl-8 md:mx-auto relative">
      <span className="block">Hi,</span>
      <span className="block">{`I’m ${name},`}</span>
      <span className="block">a Frontend Developer</span>
      <div className="button-purple mt-8 md:mt-16 w-[248px] h-14 flex align-middle">
        <a
          className="bg-background p-2 text-2xl rounded-full mx-1 my-1 w-60 text-center"
          href={resumeLink}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
      <div className={`absolute top-0 right-0 md:right-8 transition-all ease-in-out duration-300 ${isVisible ? 'md:opacity-100 md:-translate-x-20' : 'md:opacity-0'}`}>
        <img
          className="w-28 md:w-full"
          srcSet={`${decorationHeroImageSmall} 112w, ${decorationHeroImage} 800w`}
          sizes="(max-width: 767px) 112px, 800px"
          src={decorationHeroImage}
          width={262}
          height={244}
          alt="gradient cup"
        />
      </div>
    </section>
  );
};

Hero.propTypes = {
  name: PropTypes.string.isRequired,
  resumeLink: PropTypes.string.isRequired,
};

export default Hero;
