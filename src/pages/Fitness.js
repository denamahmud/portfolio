import { Link } from "react-router-dom";
import fitness1 from "../imgs/fitness/fitness1.png";
import fitness2 from "../imgs/fitness/fitness2.png";
import fitness_mobile from "../imgs/fitness/fitness-mobile.png";
import fitness3 from "../imgs/fitness/fitness3.png";
import { motion } from "framer-motion";
import OptimizedImage from "../components/OptimizedImage";
import Logo from "../components/Logo";

function Fitness() {
  return (
    <div className="container">
      <div className="py-5 md:py-20 flex justify-between">
        <Logo />
        <h3 className="text-textPrimaryColor text-2xl">Fitness Page</h3>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid-container gap-10"
      >
        <OptimizedImage
          src={fitness1}
          alt="Fitness Overview"
          className="rounded-xl object-cover block"
        />
        <OptimizedImage
          src={fitness_mobile}
          alt="Fitness Mobile View"
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
          One introductory page for the fitness club, consisting of several
          sections: the About Us section, the gallery section, the pricing
          section, the Contact Us section, and the Questions and Answers
          section. I use motion framer library for animate it
        </p>

        <div>
          <h3 className="text-textPrimaryColor text-xl md:text-2xl font-bold">
            Year
          </h3>
          <span className="text-textColor text-md">2023</span>
          <h3 className="text-textPrimaryColor text-xl md:text-2xl font-bold mt-5">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="text-textColor">Html</span>
            <span className="text-textColor">JavaScript</span>
            <span className="text-textColor">CSS</span>
            <span className="text-textColor">Reactjs</span>
            <span className="text-textColor">Framer-motion</span>
            <span className="text-textColor">React-icons</span>
            <span className="text-textColor">React-leaflet</span>
            <span className="text-textColor">React-mapbox-gl</span>
            <span className="text-textColor">React-modal-image</span>
            <span className="text-textColor">Tw-elements</span>
            <span className="text-textColor">Tailwindcss</span>
          </div>
          <Link
            className="bg-bgPrimaryColor p-2 rounded-md border-none outline-none inline-block text-center my-4"
            to="https://denamahmud.github.io/FitnessWeb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project Demo
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-3 pb-32"
      >
        <OptimizedImage
          src={fitness2}
          alt="Fitness Image 2"
          className="rounded-xl object-cover block h-[600px]"
        />
        <OptimizedImage
          src={fitness3}
          alt="Fitness Image 3"
          className="rounded-xl object-cover block h-[600px] lg:ml-auto"
        />
      </motion.div>
    </div>
  );
}

export default Fitness;
