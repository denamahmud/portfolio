import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { menuItems } from "./menuItems";
import Logo from "./Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "fixed-nav shadow-shadowNav" : "relative"
      } transition-all duration-300 ease-in-out z-10 md:block hidden w-full bg-white text-text-PriColor`}
    >
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <Logo />

          <ul className="flex items-center space-x-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  spy={true}
                  to={item.target}
                  smooth={true}
                  duration={100}
                  className="hover:text-gray-300 transition duration-300 ease-in-out cursor-pointer"
                  aria-label={item.label}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button className="bg-gradient-to-r from-bgPrimaryColor to-white text-[#232323] font-bold py-2 px-4 rounded-full shadow-md hover:bg-white hover:text-bgPrimaryColor transition duration-300 ease-in-out">
                Hire me
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
