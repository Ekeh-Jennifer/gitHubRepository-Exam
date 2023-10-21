import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section>
      <p>404</p>
      <h1>SORRY YOU VISITED THE WRONG LINK!</h1>
      <Link to="/">GO BACK HOME</Link>
    </section>
  );
}

export default Error;
