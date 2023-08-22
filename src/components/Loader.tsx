import LoaderSvg from '../assets/images/loader.svg';

const Loader = () => (
  <div className="loader-container flex items-center justify-center h-screen animate-bounce">
    <div className="loader flex items-center justify-center">
      <div className="animate-spin-slow" data-testid="loader">
        <LoaderSvg />
      </div>
    </div>
  </div>
);

export default Loader;
