import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section
      className="text-textColor bg-bgSecondaryColor py-16 md:py-32"
      id="about"
      aria-label="About Me Section"
    >
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-10">
        <motion.div
          className="title"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="title-section">About me </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-md md:text-lg text-justify leading-loose col-span-full md:col-span-3"
        >
          Hi, I'm <span className="text-textPrimaryColor">Dina Mahmood</span>, a
          passionate Front-End Web Developer with a year of experience in React.
          My goal is to create web experiences that leave a positive impact.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="col-span-full text-md md:text-lg"
        >
          <strong className="text-textPrimaryColor">Contact:</strong>{" "}
          dina.mahmood960@gmail.com <br />
          <strong className="text-textPrimaryColor">Phone:</strong> +9647708979311 <br />
          <strong className="text-textPrimaryColor">Address:</strong>{" "}
          Hey-Aljihad / Almokhabrat / Baghdad
        </motion.p>
        <motion.ul
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="col-span-full text-md md:text-lg"
        >
          <li className="leading-loose mb-2">
            Graduated in Computer Science from the University of Technology in
            2019
          </li>
          <li className="leading-loose mb-2">
            Worked remotely as a Wordpress designer in 2021 with Iraq-webhosting
            company
          </li>
          <li className="leading-loose mb-2">
            Worked as a Frontend Web Developer with Rokn Al-kanat in 2023
          </li>
        </motion.ul>
      </div>
    </section>
  );
}

export default AboutSection;
