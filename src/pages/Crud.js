 
import { Link } from "react-router-dom";
import crud from "../imgs/crud/crud.png";
import add_new_mobile from "../imgs/crud/add-new-mobile.png";
import details from "../imgs/crud/details.png";
import details_mobile from "../imgs/crud/details-mobile.png";
import products from "../imgs/crud/products.png";
import products_mobile from "../imgs/crud/products-mobile.png";
import { motion } from "framer-motion";
import OptimizedImage from "../components/OptimizedImage";
import Logo from "../components/Logo";

function Crud() {
  return (
    <div className="container">
      <div className="py-5 md:py-20 flex justify-between">
        <Logo/>
        <h3 className="text-textPrimaryColor text-2xl">CRUD App</h3>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid-container "
      >
        <OptimizedImage
          src={crud}
          alt="CRUD App Overview"
          className="rounded-xl object-cover block"
        />

        <OptimizedImage
          src={add_new_mobile}
          alt="Add New Product - Mobile"
          className="rounded-xl object-cover block"
        />
      </motion.div>
      <motion.div
        className="grid-container py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-textColor md:w-[90%] text-justify text-md lg:text-2xl leading-8">
          The application allows adding a title, price, description, and picture
          of the product, then all products are displayed on the products page,
          and any products can be opened to see more details, and it can be
          added to the wish list. On the Favorites page, each product can be
          modified and removed from the list The application is compatible with
          mobile screen sizes
        </p>

        <div>
          <h3 className="text-textPrimaryColor text-xl md:text-2xl font-bold">
            Year
          </h3>
          <span className="text-textColor text-md">2024</span>
          <h3 className="text-textPrimaryColor text-xl md:text-2xl font-bold mt-5">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="text-textColor">Htme</span>
            <span className="text-textColor">CSS</span>
            <span className="text-textColor">JavaScript</span>
            <span className="text-textColor">React</span>
            <span className="text-textColor">react-icons</span>
            <span className="text-textColor">SASS</span>
          </div>
          <Link
            className="bg-bgPrimaryColor p-2 rounded-md border-none outline-none inline-block text-center my-4"
            to="https://denamahmud.github.io/CRUD-react-app/"
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
        className="grid-container"
      >
        <OptimizedImage
          src={products}
          alt="Product Listing"
          className="rounded-xl object-cover block"
        />
        <OptimizedImage
          src={products_mobile}
          alt="Product Listing - Mobile"
          className="rounded-xl object-cover block"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid-container py-5"
      >
        <OptimizedImage
          src={details}
          alt="Product Details"
          className="rounded-xl object-cover block"
        />
        <OptimizedImage
          src={details_mobile}
          alt="Product Details - Mobile"
          className="rounded-xl object-cover block"
        />
      </motion.div>
    </div>
  );
}

export default Crud;
