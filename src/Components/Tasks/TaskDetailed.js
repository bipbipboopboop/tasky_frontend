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
    data.append("task[tag]", tasks.tag);
    data.append("task[description]", tasks.description);
    data.append("task[is_urgent]", tasks.is_urgent);

    fetch(`http://localhost:3001/api/v1/tasks/` + id, {
      method: "PUT",
      mode: "cors",
      body: data,
      headers: {
        Authorization: localStorage.getItem("authToken"),
        // "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status == 200) {
        window.location.replace("http://localhost:3000/tasks");
      }
    });
  };

  const handleComplete = (e) => {
    e.preventDefault();
    // console.log(tasks);
    var data = new FormData();
    data.append("task[is_completed]", true);
    data.append("task[is_urgent]", false);

    fetch(`http://localhost:3001/api/v1/tasks/` + id, {
      method: "PUT",
      mode: "cors",
      body: data,
      headers: {
        Authorization: localStorage.getItem("authToken"),
        // "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status == 200) {
        window.location.replace("http://localhost:3000/tasks");
      }
    });
  };
  const handleTitleChange = (e) => {
    setTasks((prevState) => ({
      id: prevState.id,
      title: e.target.value,
      description: prevState.description,
      tag: prevState.tag,
      created_at: prevState.created_at,
      updated_at: prevState.updated_at,
    }));
    // console.log(tasks);
  };
  const handleDescriptionChange = (e) => {
    setTasks((prevState) => ({
      id: prevState.id,
      title: prevState.title,
      description: e.target.value,
      tag: prevState.tag,
      created_at: prevState.created_at,
      updated_at: prevState.updated_at,
    }));
  };

  const handleTagChange = (e) => {
    setTasks((prevState) => ({
      id: prevState.id,
      title: prevState.title,
      description: prevState.description,
      tag: e.target.value,
      is_urgent: prevState.is_urgent,
      created_at: prevState.created_at,
      updated_at: prevState.updated_at,
    }));
  };
  const handleIsUrgentChange = (e) => {
    setTasks((prevState) => ({
      id: prevState.id,
      title: prevState.title,
      description: prevState.description,
      tag: prevState.tag,
      is_urgent: e.target.value,
      created_at: prevState.created_at,
      updated_at: prevState.updated_at,
    }));
  };
  return (
    tasks && (
      <div className="row my-5 justify-content-center align-items-center">
        <div
          className="card p-5"
          style={{ width: "50rem", borderRadius: "1rem" }}
        >
          <form id="tasks_form">
            <div className="form-group row my-2">
              <label htmlFor="title" className="col-sm-2 col-form-label">
                Title
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Add Title"
                  value={tasks.title}
                  onChange={handleTitleChange}
                />
              </div>
            </div>
            <div className="form-group row my-2">
              <label htmlFor="tag" className="col-sm-2 col-form-label">
                Tag
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="tag"
                  placeholder="Tag for easy search"
                  value={tasks.tag}
                  onChange={handleTagChange}
                />
              </div>
            </div>
            <div className="form-group row my-2">
              <label htmlFor="description" className="col-sm-2 col-form-label">
                Description
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  placeholder="Description"
                  value={tasks.description}
                  onChange={handleDescriptionChange}
                />
              </div>
            </div>
            <div className="form-group row my-2">
              <div className="col">
                <label htmlFor="start" className="col-sm-2 col-form-label">
                  Start
                </label>
                <div className="col-sm-10">
                  <input type="time" className="form-control" id="start_time" />
                </div>
              </div>
              <div className="col">
                <label htmlFor="end_time" className="col-sm-2 col-form-label">
                  End
                </label>
                <div className="col-sm-10">
                  <input type="time" className="form-control" id="end_time" />
                </div>
              </div>
              <div class="form-check mx-3 my-2">
                <label class="form-check-label" for="exampleCheck1">
                  Urgent
                </label>
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="urgent"
                  onClick={handleIsUrgentChange}
                />
              </div>
            </div>

            <div className="form-group row my-3">
              <div className="col-sm-10">
                <button className="btn btn-primary m-2" onClick={handlePut}>
                  Done
                </button>
                <button
                  className="btn btn-primary m-2"
                  onClick={handleComplete}
                >
                  Completed
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default TaskDetailed;
