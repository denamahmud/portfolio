import { Link } from "react-router-dom";
import movies from "../imgs/movies/movies.png";
import movie_mobile from "../imgs/movies/movie-mobile.jpg";
import details from "../imgs/movies/details.png";
import categories from "../imgs/movies/categories.png";
import { motion } from "framer-motion";
import OptimizedImage from "../components/OptimizedImage";
import Logo from "../components/Logo";

function Movies() {
  return (
    <div className="container">
      <div className="py-5 md:py-20 flex justify-between">
        <Logo />
        <h3 className="text-textPrimaryColor text-2xl">Movies App</h3>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid-container gap-10"
      >
        <OptimizedImage
          src={movies}
          alt="Movies App Overview"
          className="rounded-xl object-cover block"
        />
        <OptimizedImage
          src={movie_mobile}
          alt="Movies App Mobile View"
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
          This application allows you to search for a specific movie by name or
          classification, and the details of a single movie can be displayed.
          The API from the tmdb website was used.
        </p>

        <div>
          <h3 className="text-textPrimaryColor text-2xl">Year</h3>
          <span className="text-textColor">2023</span>
          <h3 className="text-textPrimaryColor text-2xl mt-5">Technologies</h3>
          <div className="flex flex-wrap gap-3">
            <span className="text-textColor">Html</span>
            <span className="text-textColor">JavaScript</span>
            <span className="text-textColor">CSS</span>
            <span className="text-textColor">React</span>
            <span className="text-textColor">React-icons</span>
          </div>
          <Link
            className="bg-bgPrimaryColor p-2 rounded-md border-none outline-none inline-block text-center my-4"
            to="https://denamahmud.github.io/reactjs-movie-app/"
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
        className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-32"
      >
        <OptimizedImage
          src={categories}
          alt="Movies Categories"
          className="rounded-xl object-cover block h-[600px]"
        />

        <OptimizedImage
          src={details}
          alt="Movies Details"
          className="rounded-xl object-cover block h-[600px] md:ml-auto"
        />
      </motion.div>
    </div>
  );
}

export default Movies;
