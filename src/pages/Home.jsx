import React from "react";
import { Link, Outlet } from "react-router-dom";
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
            src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=1886&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <Link to="/"> OVERVIEW</Link>
          <Link to="/repositories"> REPOSITORIES </Link>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
