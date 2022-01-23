import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
{
  /* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@600&display=swap" rel="stylesheet">  */
}
const TaskDetailed = (props) => {
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/tasks/` + id)
      .then((response) => response.json())
      .then((response_data) => console.log(response_data));
  });
  return (
    <div className="row my-5 justify-content-center align-items-center">
      <div
        className="card p-5"
        style={{ width: "18rem", borderRadius: "1rem" }}
      >
        <div className="card-body">
          <h5 className="card-title">Title{id}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Category</h6>
          <h6 className="card-subtitle mb-2">Date</h6>
          <h6 className="card-subtitle mb-2 ">Time</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button type="button" class="btn btn-primary m-1">
            Save
          </button>
          <Link to="/tasks" className="btn btn-primary m-1">
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailed;
