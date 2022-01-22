import React from "react";
import { Link } from "react-router-dom";
{
  /* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@600&display=swap" rel="stylesheet">  */
}
const TaskDetailed = (props) => {
  return (
    <div className="row my-5 justify-content-center align-items-center">
      <div
        className="card p-5"
        style={{ width: "18rem", borderRadius: "1rem" }}
      >
        <div className="card-body">
          <h5 className="card-title">Title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Category</h6>
          <h6 className="card-subtitle mb-2">Date</h6>
          <h6 className="card-subtitle mb-2 ">Time</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="#" className="card-link">
            Edit
          </Link>
          <Link to="/tasks" className="card-link">
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailed;
