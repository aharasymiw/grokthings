import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/`}>Landing Page</Link>
        </li>
        <li>
          <Link to={`register/`}>Register</Link>
        </li>
        <li>
          <Link to={`login/`}>Login</Link>
        </li>
        <li>
          <Link to={`upload/`}>Photo Upload</Link>
        </li>
        <li>
          <Link to={`results/`}>Results</Link>
        </li>
      </ul>
    </nav>);
};

export default NavBar;
