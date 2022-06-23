import { Link } from "@curi/react-dom";

export default NavLinks = () => (
  <nav
    className="navbar navbar-expand-sm navbar-dark"
    style={{ backgroundColor: "green" }}
  >
    <span className="navbar-brand mb-0 h1">@curi/router</span>
 
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <Link className="nav-link" name="Home">
            Home <span className="sr-only">(current)</span>{" "}
          </Link>
        </li>
 
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            href="#"
            id="dropdownId"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Contact
          </Link>
          <div className="dropdown-menu" aria-labelledby="dropdownId">
            <Link
              className="dropdown-item"
              name="Method"
              params={{ method: "phone" }}
            >
              Via Phone
            </Link>
            <Link
              className="dropdown-item"
              name="Method"
              params={{ method: "email" }}
            >
              Via Email
            </Link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
);
