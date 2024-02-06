import { useState } from "react";
import { Link } from "react-scroll";
import { menuItems } from "./menuItems";
import MenuToggleIcon from "./MenuToggleIcon";
import Logo from "./Logo";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const listItemStyles =
    "py-12 hover:bg-bgPrimaryColor w-full transition-all duration-700 delay-75 text-center cursor-pointer";

  return (
    <nav className="bg-white block md:hidden">
      <div className="flex justify-between items-center p-4">
         <Logo/>

        <MenuToggleIcon
          isOpen={isOpen}
          onClick={handleToggleMenu}
          label="Toggle Menu"
        />
      </div>

      <div
        className={`absolute bg-bgSecondaryColor transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 h-screen w-full" : "opacity-0 h-0 w-0"
        }`}
      >
        <ul className="flex flex-col items-center">
          {menuItems.map((item) => (
            <li key={item.id} className={listItemStyles}>
              <Link
                to={item.target}
                smooth={true}
                duration={100}
                className="text-white transition duration-300 ease-in-out cursor-pointer"
                aria-label={item.label}
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li className="bg-gradient-to-r mt-10 from-bgPrimaryColor to-white text-bgSecondaryColor font-bold py-2 p-4 rounded-full shadow-md cursor-pointer">
            Hire me
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MobileMenu;
