import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const TaskDetailed = () => {
  const { id } = useParams();
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/tasks/` + id, {
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
    })
      .then((response) => response.json())
      .then((response_data) => {
        console.log(response_data);
        setTasks(response_data);
      });
  }, []);

  const handlePut = (e) => {
    e.preventDefault();
    // console.log(tasks);
    var data = new FormData();
    data.append("task[title]", tasks.title);
    data.append("task[description]", tasks.description);

    fetch(`http://localhost:3001/api/v1/tasks/` + id, {
      method: "PUT",
      mode: "cors",
      body: data,
      headers: {
        Authorization: localStorage.getItem("authToken"),
        // "Content-Type": "application/json",
      },
    });
  };

  const titleChange = (e) => {
    setTasks((prevState) => ({
      id: prevState.id,
      title: e.target.value,
      description: prevState.description,
      created_at: prevState.created_at,
      updated_at: prevState.updated_at,
    }));
    // console.log(tasks);
  };
  const descriptionChange = (e) => {
    setTasks((prevState) => ({
      id: prevState.id,
      title: prevState.title,
      description: e.target.value,
      created_at: prevState.created_at,
      updated_at: prevState.updated_at,
    }));
  };
  return (
    <div className="row my-5 justify-content-center align-items-center">
      <div
        className="card p-5"
        style={{ width: "18rem", borderRadius: "1rem" }}
      >
        {tasks && (
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="title"></label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={tasks.title}
                  onChange={titleChange}
                />
                <input
                  type="text"
                  className="form-control my-5"
                  id="description"
                  value={tasks.description}
                  onChange={descriptionChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={handlePut}
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskDetailed;
