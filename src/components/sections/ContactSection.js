import { FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import ReactWhatsapp from "react-whatsapp";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function ContactSection() {
  const whatsappNumber = "9647708969311";
  return (
    <section id="contact" className="bg-bgSecondaryColor py-[60px] md:py-[150px]">
      <div className="container">
        <motion.div
          className="title"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="title-section">Links </h2>
        </motion.div>
        <div className="grid lg:grid-rows-2 justify-items-center gap-10 p-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Link
                to="https://iq.linkedin.com/in/denamahmud"
                target="_blank"
                aria-label="LinkedIn Profile"
              >
                <div className="flex gap-5 items-center my-4">
                  <FaLinkedin color="#e9c547" size="2em" />
                  <span className="text-textPrimaryColor ">LinkedIn</span>
                  <FaArrowRight color="#e9c547" size="2em" />
                </div>
                <p className="text-textColor">
                  Explore my professional network on LinkedIn
                </p>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <ReactWhatsapp
                number={whatsappNumber}
                message="Hello World!!!"
                aria-label="WhatsApp"
              >
                <div className="flex gap-5 items-center my-4">
                  <FaWhatsapp color="#e9c547" size="2em" />
                  <span className="text-textPrimaryColor">Whatsapp</span>
                  <FaArrowRight color="#e9c547" size="2em" />
                </div>
                <p className="text-textColor">Connect with me on WhatsApp</p>
              </ReactWhatsapp>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Link
                to="https://github.com/denamahmud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <div className="flex gap-5 items-center my-4">
                  <FaGithub color="#e9c547" size="2em" />
                  <span className="text-textPrimaryColor">Github</span>
                  <FaArrowRight color="#e9c547" size="2em" />
                </div>
                <p className="text-textColor">
                  Check out my projects on GitHub
                </p>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Link
                to="https://www.instagram.com/dev_freelancer__/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
              >
                <div className="flex gap-5 items-center my-4">
                  <FaInstagram color="#e9c547" size="2em" />
                  <span className="text-textPrimaryColor">Instagram</span>
                  <FaArrowRight color="#e9c547" size="2em" />
                </div>
                <p className="text-textColor">
                  Follow me on Instagram for project updates
                </p>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Link
                to="mailto:dina.mahmood960@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send Email"
              >
                <div className="flex gap-5 items-center my-4">
                  <FaEnvelope color="#e9c547" size="2em" />
                  <span className="text-textPrimaryColor">Gmail</span>
                  <FaArrowRight color="#e9c547" size="2em" />
                </div>
                <p className="text-textColor">Reach out to me via email</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
