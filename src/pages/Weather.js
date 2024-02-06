import { Link } from "react-router-dom";
import weather1 from "../imgs/weather/weather1.png";
import weather2 from "../imgs/weather/weather2.png";
import { motion } from "framer-motion";
import OptimizedImage from "../components/OptimizedImage";
import Logo from "../components/Logo";

function Weather() {
  return (
    <div className="container">
      <div className="py-5 md:py-20 flex justify-between">
        <Logo />
        <h3 className="text-textPrimaryColor text-2xl">Weather App</h3>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-col-1 md:grid-cols-2 gap-5 "
      >
        <OptimizedImage
          src={weather1}
          alt="Weather App Overview"
          className="rounded-xl object-cover block"
        />
        <OptimizedImage
          src={weather2}
          alt="Weather App Details"
          className="rounded-xl object-contain block"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid-container py-20"
      >
        <p className="text-textColor md:w-[90%] text-justify text-md lg:text-2xl leading-8">
          The application allows you to search for the weather conditions for
          any country in the world, and the API from openweathermap was used The
          application is compatible with all screen sizes and is easy to use
        </p>

        <div>
          <h3 className="text-textPrimaryColor text-2xl">Year</h3>
          <span className="text-textColor">2023</span>
          <h3 className="text-textPrimaryColor text-2xl mt-5">Technologies</h3>
          <div className="flex flex-wrap gap-3">
            <span className="text-textColor">Html</span>
            <span className="text-textColor">React</span>
            <span className="text-textColor">JavaScript</span>
            <span className="text-textColor">CSS</span>
            <span className="text-textColor">Tailwindcss</span>
            <span className="text-textColor">Axios</span>
            <span className="text-textColor">React-icons</span>
          </div>
          <Link
            className="bg-bgPrimaryColor p-2 rounded-md border-none outline-none inline-block text-center my-4"
            to="https://denamahmud.github.io/weatherApp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project Demo
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Weather;
