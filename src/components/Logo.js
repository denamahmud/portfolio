import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="text-3xl font-bold cursor-pointer text-textPrimaryColor block font-protest"
      aria-label="Dina - Logo Name"
    >
      Dina
    </Link>
  );
}

export default Logo 
