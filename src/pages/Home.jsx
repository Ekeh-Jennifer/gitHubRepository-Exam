import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
// import overviewImg from "../assets/book-open-solid-svg";
// import repoImg from "../assets/building-regular.svg";

function Home() {
  return (
    <div className="container">
      <div className="container__aside">
        {" "}
        <div>
          <img
            className="container__aside-img"
            src="https://avatars.githubusercontent.com/u/143519877?v=4"
            alt=""
          />
        </div>
        <div className="container__aside-text">
          <p> EKEH JENNIFER</p>
          <p>drjen</p>
          <button type="button" onclick=")">
            Follow
          </button>
        </div>
      </div>
      <div className="container__main">
        <div className="container__main1">
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to="/"
          >
            {" "}
            OVERVIEW
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to="/repositories"
          >
            {" "}
            REPOSITORIES{" "}
          </NavLink>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
