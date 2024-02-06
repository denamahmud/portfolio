import { FaArrowRight } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import OptimizedImage from './OptimizedImage';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => { 
    import('../imgs/Dina.jpeg').then((module) => {
      setImageSrc(module.default);
    });
  }, []);
  const handleMailButtonClick = () => {
    window.location.href = 'mailto:dina.mahmood960@gmail.com';
  };

  return (
    <header
      id="header"
      className="py-16 md:py-60 bg-bgSecondaryColor text-white border-b-2 border-borderColor"
    >
      <div className="container grid md:grid-cols-2 grid-cols-1">
        <div className="text-left">
          <h1 className="text-5xl font-bold">Dina Mahmood</h1>
          <p className="text-textPrimaryColor text-xl ml-1 mb-4">
            Front-End Web Developer
          </p>
          <div className="flex w-[200px] lg:w-[100%] flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 lg:my-20">
            <button
              onClick={handleMailButtonClick}
              className="bg-bgPrimaryColor text-white font-bold py-3 px-6 rounded-full flex items-center justify-between gap-2 hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 ease-in-out"
            >
              <span className="text-textSecondaryColor text-md lg:text-xl">
                Get in touch
              </span>
              <FaArrowRight color="#141414" size={20} />
            </button>

            <Link to='https://github.com/denamahmud' className="bg-white text-bgPrimaryColor font-bold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300 transition-all justify-between duration-300 ease-in-out" target='_blank'>
              <span className="text-textSecondaryColor text-md lg:text-xl">
                See Github
              </span>
              <BsGithub color="#141414" size={20} />
            </Link>
          </div>
        </div>

        <div className="mt-8 md:mt-0 w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden md:mx-auto border-4 border-solid border-bgPrimaryColor">
          <OptimizedImage src={imageSrc} alt="Dina Mahmood - Front-End Web Developer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
