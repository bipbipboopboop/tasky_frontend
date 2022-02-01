import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

const TaskDetailed = () => {
  const { id } = useParams();
  const [tasks, setTasks] = useState(null);
  const task_id =
    ` https://cvwo-tasky-backend.herokuapp.com/api/v1/tasks/` + id;
  const tasks_url = `https://cvwo-tasky.netlify.app/tasks`;
  // const task_id = `http://localhost:3001/api/v1/tasks/` + id;
  // const tasks_url = `http://localhost:3000/tasks`;

  useEffect(() => {
    fetch(task_id, {
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
    })
      .then((response) => response.json())
      .then((response_data) => {
        console.log(response_data);
        // console.log(response_data.start_time);
        setTasks(response_data);
      });
  }, []);

  const handlePut = (e) => {
    e.preventDefault();
    // console.log(tasks);
    var data = new FormData();
    data.append("task[title]", tasks.title);
    data.append("task[tag]", tasks.tag === "" ? "Others" : tasks.tag);
    data.append("task[description]", tasks.description);
    data.append("task[is_urgent]", tasks.is_urgent);
    data.append("task[start_time]", tasks.start_time);
    data.append("task[end_time]", tasks.end_time);
    for (var value of data.values()) {
      console.log(value);
    }
    fetch(task_id, {
      method: "PUT",
      mode: "cors",
      body: data,
      headers: {
        Authorization: localStorage.getItem("authToken"),
        // "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        window.location.replace(tasks_url);
      }
    });
  };

  const handleComplete = (e) => {
    e.preventDefault();
    // console.log(tasks);
    var data = new FormData();
    data.append("task[is_completed]", true);
    data.append("task[is_urgent]", false);

    fetch(task_id, {
      method: "PUT",
      mode: "cors",
      body: data,
      headers: {
        Authorization: localStorage.getItem("authToken"),
        // "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        window.location.replace(tasks_url);
      }
    });
  };
  const handleTitleChange = (e) => {
    setTasks((prevState) => ({
      id: prevState.id,
      title: e.target.value,
      description: prevState.description,
      tag: prevState.tag,
      start_time: prevState.start_time,
      end_time: prevState.end_time,
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
      start_time: prevState.start_time,
      end_time: prevState.end_time,
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
      start_time: prevState.start_time,
      end_time: prevState.end_time,
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
      is_urgent: e.target.checked,
      start_time: prevState.start_time,
      end_time: prevState.end_time,
      created_at: prevState.created_at,
      updated_at: prevState.updated_at,
    }));
  };
  const handleStartTimeChange = (e) => {
    console.log("The start time is change to " + e.toISOString());
    setTasks((prevState) => ({
      id: prevState.id,
      title: prevState.title,
      description: prevState.description,
      tag: prevState.tag,
      is_urgent: prevState.is_urgent,
      start_time: e.toISOString(),
      end_time: prevState.end_time,
      created_at: prevState.created_at,
      updated_at: prevState.updated_at,
    }));
  };
  const handleEndTimeChange = (e) => {
    // console.log("The end time is change to " + e.toISOString());
    setTasks((prevState) => ({
      id: prevState.id,
      title: prevState.title,
      description: prevState.description,
      tag: prevState.tag,
      is_urgent: prevState.is_urgent,
      start_time: prevState.start_time,
      end_time: e.toISOString(),
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
                  type="textarea"
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
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      renderInput={(params) => <TextField {...params} />}
                      value={tasks.start_time}
                      disablePast
                      onChange={handleStartTimeChange}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div className="col">
                <label htmlFor="end_time" className="col-sm-2 col-form-label">
                  End
                </label>
                <div className="col-sm-10">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      renderInput={(params) => <TextField {...params} />}
                      value={tasks.end_time}
                      disablePast
                      minDateTime={new Date(tasks.start_time).getTime()}
                      onChange={handleEndTimeChange}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div className="form-check mx-3 my-2">
                <label className="form-check-label">Urgent</label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="urgent"
                  checked={tasks.is_urgent}
                  onChange={handleIsUrgentChange}
                />
              </div>
            </div>

            <div className="form-group row my-3">
              <div className="col-sm-10">
                <button className="btn btn-primary m-2" onClick={handlePut}>
                  Save
                </button>
                <button
                  className="btn btn-primary m-2"
                  onClick={handleComplete}
                >
                  Mark as Complete
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
