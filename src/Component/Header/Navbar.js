import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, setLoading, auth } = useContext(AuthContext);
  const logOutUser = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        toast("Logout successfuly");
        window.location = "/";
      })
      .catch((error) => {
        toast(error.massage);
      });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-1">
        <Link to="/" className="navbar-brand">
          Food Ghor
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              {user && (
                <Link className="nav-link" to="/my-review">
                  My Review
                </Link>
              )}
            </li>
            <li className="nav-item">
              {user && (
                <Link className="nav-link" to="/add-service">
                  Add-Service
                </Link>
              )}
            </li>
            <li className="nav-item">
              {user ? (
                <button
                  onClick={logOutUser}
                  title={user?.displayName}
                  className="btn mt-1 btn-secondary btn-sm"
                >
                  Logout
                </button>
              ) : (
                <Link className="nav-link" to="/user/login">
                  <i className="fas mx-1 fa-sign-in-alt"></i> Login
                </Link>
              )}
            </li>
          </ul>
        </div>
        <Toaster />
      </nav>
    </div>
  );
};

export default Navbar;
