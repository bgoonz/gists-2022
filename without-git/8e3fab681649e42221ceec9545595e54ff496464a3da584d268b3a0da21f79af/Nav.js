import { Link } from "@reach/router";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <span className="navbar-brand mb-0 h1">@reach/router</span>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about-us" className="nav-link">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact-us" className="nav-link">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
