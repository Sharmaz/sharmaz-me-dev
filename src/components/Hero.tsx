import { useRef } from 'react';

import decorationHeroImage from '../assets/images/cup-dynamic-gradient.webp';
import decorationHeroImageSmall from '../assets/images/cup-dynamic-gradient-small.webp';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

type HeroProps = {
  name: string,
  resumeLink: string,
};

const Hero = ({ name, resumeLink }: HeroProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <section ref={ref} className="text-2xl text-slate-300 mx-4 mb-10 mt-36 md:text-5xl max-w-screen-lg md:pl-8 md:mx-auto relative">
      <span className="block relative p-[2px_0] hero-style before:content-['Hi,'] before:orange-gradient before:animation-delay-0">Hi,</span>
      <span className="block relative p-[2px_0] hero-style before:content-['I’m_Ivan_Robles,'] before:red-gradient before:animation-delay-3">{`I’m ${name},`}</span>
      <span className="block relative p-[2px_0] hero-style before:content-['a_Frontend_Developer'] before:purple-gradient before:animation-delay-6">a Frontend Developer</span>
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

export default Hero;
