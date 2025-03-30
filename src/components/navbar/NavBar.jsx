import "./navbar.css";
import { logo } from "../../assets/index";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext, useState } from "react";
import { GrClose } from "react-icons/gr";
import { FiAlignJustify } from "react-icons/fi";

export default function NavBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const history = useHistory(); // ✅ Get history object

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/login"); // ✅ Redirect to login after logout
  };

  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>

      <ul
        className={isMobile ? "nav-links-mobile" : "nav-link"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="nav_home">
          <li>Home</li>
        </Link>
        <Link to="/about" className="nav_about">
          <li>About</li>
        </Link>
        <Link to="/contact" className="nav_contact">
          <li>Contact</li>
        </Link>
        <Link to="/write" className="nav_write">
          <li>Write</li>
        </Link>

        {/* ✅ Fix Logout Button */}
        {user && (
          <li className="nav_logout" onClick={handleLogout}>
            Logout
          </li>
        )}
      </ul>

      <div>
        {user ? (
          <Link to="/settings">
            <img className="dp" src={PF + user.profilePic} alt=" " />
          </Link>
        ) : (
          <ul className="loginBar">
            <li>
              <Link className="link" id="loginBar" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="link" id="loginBar" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
      </div>

      <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <GrClose className="icon" /> : <FiAlignJustify className="icon" />}
      </div>
    </nav>
  );
}
