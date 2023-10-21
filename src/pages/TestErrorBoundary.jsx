import React from "react";

function TestErrorBoundary() {
  let user = { name: "joy", email: "joy@example.com" };
  return <div>{user}</div>;
}

export default TestErrorBoundary;
