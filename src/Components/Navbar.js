import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setisLoggedIn] = useState(
    localStorage.getItem("authToken") === null ||
      localStorage.getItem("authToken").length < 100
      ? false
      : true
  );
  // const sign_out_url = "http://localhost:3001/users/sign_out";
  // const welcome_url = "http://localhost:3000";
  const sign_out_url =
    " https://cvwo-tasky-backend.herokuapp.com/users/sign_out";
  const welcome_url = "https://cvwo-tasky.netlify.app";
  const handleSignOut = () => {
    fetch(sign_out_url, {
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
      method: "DELETE",
    }).then((res) => {
      localStorage.clear();
      setisLoggedIn(false);
      if (res.status === 200) {
        window.location.replace(welcome_url);
      }
    });
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "coral" }}
    >
      <div className="container-fluid">
        {isLoggedIn ? (
          <Link to="/tasks" className="navbar-brand">
            Task
          </Link>
        ) : (
          <Link to="/" className="navbar-brand">
            Tasky
          </Link>
        )}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

          {isLoggedIn ? (
            <>
              <Link to="/newtask" className="btn mx-2">
                Create
              </Link>
              <Link to="/settings" className="btn mx-2">
                Settings
              </Link>
              <button className="btn mx-2" onClick={handleSignOut}>
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/signin" className="btn mx-2">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
