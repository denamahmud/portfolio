import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import OptimizedImage from "../OptimizedImage";

function ProjectCard({ title, description, imageSrc, to, x }) {
  const length = 50;

  function truncateParagraph(originalParagraph, maxLength) {
    if (originalParagraph.length <= maxLength) {
      return originalParagraph;
    }

    const truncatedParagraph =
      originalParagraph.substring(0, maxLength) + "...";
    return truncatedParagraph;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: x }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <Link
        to={to}
        className="bg-textPrimaryColor grid lg:grid-cols-2 grid-cols-1 p-4 gap-4 rounded-xl lg:h-[200px]"
        target="_blank"
      >
        <div className="flex flex-col">
          <h3 className="text-xl">{title}</h3>
          <p className="text-justify md:text-md text-xs py-5">
            {truncateParagraph(description, length)}
          </p>
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 1 }}
            className="shadow-md p-2 mb-6 bg-bgBtnHeaderColor md:w-[160px] h-[50px] rounded-full border-none outline-none flex justify-center items-center gap-2"
          >
            <span className="text-textSecondaryColor">See Details</span>
            <FaArrowRight className="text-textSecondaryColor" />
          </motion.button>
        </div>
        <OptimizedImage
          src={imageSrc}
          alt={title}
          className="rounded-xl md:w-full md:h-40 md:object-cover"
        />
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
