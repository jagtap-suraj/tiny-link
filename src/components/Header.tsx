import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <img src="/public/logo.png" className="h-16" alt="tinky-link Logo" />
      </Link>
    </nav>
  );
};

export default Header;
