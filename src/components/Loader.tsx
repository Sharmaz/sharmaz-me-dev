import LoaderSvg from '../assets/images/loader.svg';

const Loader = () => (
  <div className="loader-container flex items-center justify-center h-screen animate-bounce">
    <div className="loader flex items-center justify-center">
      <LoaderSvg className="animate-spin-slow" data-testid="loader" />
    </div>
  </div>
);

export default Loader;
