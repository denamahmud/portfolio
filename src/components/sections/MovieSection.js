import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OptimizedImage from "../OptimizedImage";

function MovieSection({ title, images, description, year, technologies, demoLink }) {
  return (
    <div className="grid-container gap-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid-container gap-10"
      >
        {images.map((image, index) => (
          <OptimizedImage key={index} src={image.src} alt={image.alt} className="rounded-xl object-cover block" />
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid-container py-20"
      >
        <p className="text-textColor md:w-[90%] text-justify text-md lg:text-2xl leading-8">
          {description}
        </p>

        <div>
          <h3 className="text-textPrimaryColor text-2xl">Year</h3>
          <span className="text-textColor">{year}</span>
          <h3 className="text-textPrimaryColor text-2xl mt-5">Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span key={index} className="text-textColor">
                {tech}
              </span>
            ))}
          </div>
          <Link
            className="bg-bgPrimaryColor p-2 rounded-md border-none outline-none inline-block text-center my-4"
            to={demoLink}
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

export default MovieSection;
