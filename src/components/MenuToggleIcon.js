import { BsList } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

const MenuToggleIcon = ({ isOpen, onClick, label }) => {
  const IconComponent = isOpen ? FaTimes : BsList;

  return (
    <IconComponent
      onClick={onClick}
      className="text-3xl text-gray cursor-pointer"
      aria-label={label}
    />
  );
};

export default MenuToggleIcon;
