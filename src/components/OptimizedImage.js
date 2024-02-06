import LazyLoad from 'react-lazy-load';

const OptimizedImage = ({ src, alt , className }) => {
  return (
    <LazyLoad  >
      <img src={src} alt={alt} className={className} />
    </LazyLoad>
  );
};

export default OptimizedImage;
