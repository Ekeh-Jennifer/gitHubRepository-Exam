import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useErrorBoundary } from "react-error-boundary";
import envelopeImg from "../assets/envelope-regular.svg";

function Repo() {
  const navigate = useNavigate();
  const params = useParams();
  const URL = `https://api.github.com/repos/Ekeh-Jennifer/${params.repoName}`;
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(false);
  const cancelRequest = useRef(null);
  const { showBoundary } = useErrorBoundary();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(URL);
        const resData = await res.json();
        setRepo(resData);
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
  const {
    full_name,
    visibility,
    html_url,
    created_at,
    updated_at,
    forks_count,
    stargazers_count,
    watchers_count,
    languages,
    parent,
  } = repo;

  const convertDate = (date) => {
    const [weekDay, month, day, year] = new Date(date)
      .toDateString()
      .split(" ");
    return `${weekDay}, ${month}, ${day}, ${year}`;
  };
  console.log(repo);
  return (
    <div>
      <div>
        <h1>{full_name}</h1>
        <p className="">{visibility}</p>

        {parent ? <p className=""> {parent.full_name} </p> : null}
      </div>
      <div className="Repositories">
        <p className="repo__1">Created on {convertDate(created_at)}</p>
        <p>Updated on {convertDate(updated_at)}</p>
        <p className="repo__1a">
          <p>Forks: 0</p>
          <p>Stars: 0</p>
          <p>Visibility: 0</p>

          {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          nobis accusamus omnis ex exercitationem perspiciatis repellat vitae
          animi incidunt culpa numquam, eius asperiores ipsa rerum. Ipsa veniam
          doloremque dolorum architecto? Amet odit illum ab in, doloremque
          ullam, tenetur illo eos quaerat dicta quis facere, natus aspernatur
          beatae dolorem quod dolor reiciendis unde. Eaque, consectetur nisi
          quibusdam atque quisquam deserunt. Quam! */}
        </p>

        <button onClick={() => navigate("/repositories")}>Go back</button>
      </div>
    </div>
  );
}

export default Repo;
