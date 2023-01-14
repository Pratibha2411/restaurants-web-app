import React from "react";
// import Categories from "../categories/Categories";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
          <i className="bi bi-hospital-fill restroIcon center"></i>
            <a className="navbar-brand restroTag" href="Navbar">
              Da Otto
            </a>
            <form className="d-flex">
              <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control searchbar"
                  placeholder="Search for Restaurants  (Press Enter to search)"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <button className="btn" type="button">
                <i className="bi bi-card-text filterRestro"></i>
              </button>
              <button className="btn" type="button">
                <i className="bi bi-cart3 cartRestro"></i>
              </button>
            </form>
          </div>
        </nav>
        {/* <Categories /> */}
      </div>
    </>
  );
};

export default Navbar;
