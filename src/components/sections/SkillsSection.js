import { FaHtml5, FaCss3Alt, FaSass, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFigma } from "react-icons/io5";
import { BsBootstrapFill } from "react-icons/bs";
import { motion } from "framer-motion";
import SkillItem from "./SkillItem";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-[50px] md:py-[80px] bg-bgSecondaryColor">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="title text-textPrimaryColor"
        >
          <h2 className="title-section">Skills</h2>
        </motion.div>
        <div className="grid grid-rows-3 justify-center">
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3"
          >
            <SkillItem
              icon={
                <FaHtml5 size={60} className="icon text-textPrimaryColor" />
              }
              stars={4.5}
              label="HTML"
            />
            <SkillItem
              icon={
                <FaCss3Alt size={60} className="icon text-textPrimaryColor" />
              }
              stars={4}
              label="CSS"
            />
            <SkillItem
              icon={
                <IoLogoJavascript
                  size={60}
                  className="icon text-textPrimaryColor"
                />
              }
              stars={4.5}
              label="JavaScript"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3"
          >
            <SkillItem
              icon={
                <BsBootstrapFill
                  size={60}
                  className="icon text-textPrimaryColor"
                />
              }
              stars={4.5}
              label="Bootstrap"
            />
            <SkillItem
              icon={
                <IoLogoFigma size={60} className="icon text-textPrimaryColor" />
              }
              stars={4.5}
              label="Figma"
            />
            <SkillItem
              icon={<FaSass size={60} className="icon text-textPrimaryColor" />}
              stars={4.5}
              label="Sass"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-2"
          >
            <SkillItem
              icon={
                <FaPython size={60} className="icon text-textPrimaryColor" />
              }
              stars={4.5}
              label="Python"
            />
            <SkillItem
              icon={
                <FaReact size={60} className="icon text-textPrimaryColor" />
              }
              stars={4.5}
              label="React"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
