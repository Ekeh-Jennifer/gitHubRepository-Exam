import React, { useEffect, useRef, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
function Repositories() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const cancelRequest = useRef(null);
  const { showBoundary } = useErrorBoundary();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://api.github.com/users/Ekeh-Jennifer/repos"
        );
        const resData = await res.json();
        setRepos(resData);
        setLoading(false);
        if (cancelRequest.current) return;
      } catch (err) {
        if (cancelRequest.current) return;
        showBoundary(err);
      }
    };
    fetchData();

    return () => {
      cancelRequest.current = true;
    };
  }, []);
  if (loading) return <p>loading...</p>;
  return (
    <div className="repo-container">
      {repos.map((repo) => {
        return (
          <Link key={repo.id} to={`/repos/${repo.name}`}>
            {" "}
            <div className="repo-card">
              <h2> {repo.name}</h2>
              <p>{repo.language}</p>
              <p>{repo.visibility}</p>
            </div>{" "}
          </Link>
        );
      })}
    </div>
  );
}

export default Repositories;
