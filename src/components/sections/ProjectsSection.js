import { motion } from "framer-motion"; 
import ProjectCard from "./ProjectCard";
import crud from "../../imgs/crud/crud.png";
import weather from "../../imgs/weather/weather1.png";
import fitness from "../../imgs/fitness/fitness1.png";
import movies from "../../imgs/movies/movies.png"; 

function ProjectsSection() {
  return (
    <section className="projects " id="projects">
      <div className="overlay">
        <div className="container py-[60px] md:py-[150px]">
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="title"
          >
            <h2 className="title-section">Projects </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
            <ProjectCard
              x={-300}
              title="CRUD APP"
              description="The application allows adding a title, price, description, and picture of the product, then all products are displayed on the products page, and any products can be opened to see more details, and it can be added to the wish list. On the Favorites page, each product can be modified and removed from the list The application is compatible with mobile screen sizes"
              imageSrc={crud}
              to="/crud"
            />
            <ProjectCard
              x={300}
              title="Fitness APP"
              description="One introductory page for the fitness club, consisting of several sections: the About Us section, the gallery section, the pricing section, the Contact Us section, and the Questions and Answers section. I use the motion framer library for animate it"
              imageSrc={fitness}
              to="/fitness"
            />
            <ProjectCard
             x={-300}
              title="Movies APP"
              description="This application allows you to search for a specific movie by name or classification, and the details of a single movie can be displayed. The API from the tmdb website was used."
              imageSrc={movies}
              to="/movies"
            />
            <ProjectCard
            x={300}
              title="Weather APP"
              description="The application allows you to search for the weather conditions for any country in the world, and the API from openweathermap was used The application is compatible with all screen sizes and is easy to use"
              imageSrc={weather}
              to="/weather"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
