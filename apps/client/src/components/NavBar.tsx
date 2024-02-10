import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div className="bg-blue-500">Cornucopia</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
