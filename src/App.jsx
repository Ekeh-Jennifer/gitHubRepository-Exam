import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import gitImg from "../assets/github.svg";
import Error from "./pages/Error";
import MyFallbackComponent from "./component/ErrorFallBack";
import TestErrorBoundary from "./pages/TestErrorBoundary";
import Overview from "./pages/Overview";
import Repositories from "./pages/Repositories";
import Repo from "./pages/Repo";
import GitImg from "./assets/github.svg";

function App() {
  return (
    <ErrorBoundary FallbackComponent={MyFallbackComponent}>
      <header>
        <nav>
          <div className="header-logo">
            <Link to="/">
              {" "}
              <img src={GitImg} alt="" />{" "}
            </Link>
          </div>
          <div className="header-text">
            <h1>MY GIT HUB REPOSITORY</h1>
          </div>
          <ul className="header-ref">
            <li className="header-refText">
              <Link to="/error">Error Page</Link>
            </li>
            <li className="header-refText2">
              <Link to="/error-boundary">Error Boundary</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route element={<Home />} path="/">
          <Route element={<Overview />} path="/" />
          <Route element={<Repositories />} path="repositories" />
          <Route element={<Repo />} path="repos/:repoName" />
        </Route>
        <Route element={<Error />} path="*" />
        <Route element={<TestErrorBoundary />} path="error-boundary" />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
