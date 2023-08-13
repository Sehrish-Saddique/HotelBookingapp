import React from "react";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          AliasRoom
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className=" fa fa-bars text-light" ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-50">
            {user ? (
              <>
                 
                <div class="dropdown ml-auto">
                  <button
                    class=" btn btn-primary dropdown-toggle rounded-2 p-3 border-0 "
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                   <i class="fa fa-user"></i> {user.name}
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                      Bookings
                    </a>
                    <a class="dropdown-item" href="#" onClick={logout}>
                     Logout
                    </a>
                     
                  </div>
                </div>
              </>
            ) : (
              <>
                <li className="nav-item active">
                  <a className="nav-link" href="/register">
                    Register
                    {/* Room <span className="sr-only">(current)</span> */}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
