import PropTypes from 'prop-types';
import decorationContactImage from '../assets/images/link-dynamic-gradient.webp';
import decorationContactImageSmall from '../assets/images/link-dynamic-gradient-small.webp';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Contact = ({ email }) => {
  const options = {
    root: null,
    rootMargin: '150px',
    threshold: 1.0,
  };

  const [containerRef, isVisible] = useIntersectionObserver(options);
  return (
    <section className="mx-4 my-10  max-w-screen-lg md:px-8 md:mx-auto relative" id="contact">
      <h2 className="subtitle">Contact me</h2>
      <div className="flex flex-col md:flex-row" ref={containerRef}>
        <div className="form-container p-0.5 w-full my-8 md:w-1/2">
          <form className="bg-background rounded-2xl p-4" action="https://formspree.io/f/irae45@gmail.com" method="post">
            <div className="form-field flex align-middle my-3 md:my-4 w-full">
              <input className="rounded-2xl p-4 w-full m-0.5 bg-background" type="text" name="fullname" placeholder="Full Name" />
            </div>
            <div className="form-field flex align-middle my-3 md:my-4 w-full">
              <input className="rounded-2xl p-4 w-full m-0.5 bg-background" type="email" name="email" placeholder="Email Address" />
            </div>
            <div className="form-field flex align-middle my-3 md:my-4">
              <input className="rounded-2xl p-4 w-full m-0.5 bg-background" type="text" name="subject" placeholder="Subject" />
            </div>
            <div className="form-field flex align-middle my-3 md:my-8">
              <textarea className="rounded-2xl p-4 w-full m-0.5 bg-background h-72 md:h-auto" name="message" cols="30" rows="5" placeholder="How can I help you?" />
            </div>
            <div className="button-orange flex align-middle mt-4 md:mt-8 md:w-[248px]">
              <button className="bg-background rounded-full p-4 w-full m-0.5" type="submit">Send Message</button>
            </div>
          </form>
        </div>
        <div className="md:m-8 w-2/3 md:w-1/2">
          <h2 className="text-2xl text-slate-300">Let&apos;s get in touch today!!</h2>
          <p className="my-8">
            My inbox is open even if I don&apos;t need to look for a new opportunity.
            So If you write me to ask me something or to say hello, I will get back to you.
          </p>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
      <div className={`absolute bottom-0 md:bottom-24 right-4 md:right-0 lg:right-20 transition-all ease-in-out duration-300 ${isVisible ? 'md:opacity-100 md:-translate-x-20' : 'md:opacity-0'}`}>
        <img
          className="w-28 md:w-full"
          srcSet={`${decorationContactImageSmall} 112w, ${decorationContactImage} 800w`}
          sizes="(max-width: 767px) 112px, 800px"
          src={decorationContactImage}
          width={262}
          height={240}
          alt="gradient link"
        />
      </div>
    </section>
  );
};

Contact.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Contact;
