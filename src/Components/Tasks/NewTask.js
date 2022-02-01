import React, { Component } from "react";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

export default class NewTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      api_url: `https://cvwo-tasky-backend.herokuapp.com/api/v1/tasks`,
      tasks_url: `https://cvwo-tasky.netlify.app/tasks`,
      // api_url: `http://localhost:3001/api/v1/tasks`,
      // tasks_url: `http://localhost:3000/tasks`,

      title: "",
      tag: "",
      description: "",
      isUrgent: false,
      start_time: new Date().toISOString(),
      end_time: new Date().toISOString(),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.handleIsUrgentChange = this.handleIsUrgentChange.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
    this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.formSubmit(event.target);
    this.setState({ title: "", description: "", tag: "" });
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleTagChange(event) {
    this.setState({
      tag: event.target.value,
    });
  }

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value,
    });
  }
  handleIsUrgentChange() {
    this.setState(({ isUrgent }) => ({
      isUrgent: !isUrgent,
    }));
  }
  handleStartTimeChange(e) {
    this.setState({
      start_time: e.toISOString(),
      end_time:
        new Date(this.state.start_time).getTime() <
        new Date(this.state.end_time).getTime()
          ? this.state.end_time
          : e.toISOString(),
    });
  }
  handleEndTimeChange(e) {
    this.setState({ end_time: e.toISOString() });
    // console.log("The end time is " + this.state.end_time);
  }

  async formSubmit() {
    var data = new FormData();
    data.append("task[title]", this.state.title);
    data.append("task[description]", this.state.description);
    data.append("task[tag]", this.state.tag === "" ? "Others" : this.state.tag);
    data.append("task[is_urgent]", this.state.isUrgent);
    data.append("task[is_completed]", false);
    data.append("task[start_time]", this.state.start_time);
    data.append("task[end_time]", this.state.end_time);

    await fetch(this.state.api_url, {
      method: "POST",
      mode: "cors",
      body: data,
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
    }).then((res) => {
      if (res.status === 201) {
        window.location.replace(this.state.tasks_url);
      }
    });
  }
  render() {
    return (
      <div className="row my-5 justify-content-center align-items-center">
        <div
          className="card p-5"
          style={{ width: "50rem", borderRadius: "1rem" }}
        >
          <h1>New Task</h1>
          <p>Please fill in the info below</p>
          <form onSubmit={this.handleSubmit} id="tasks_form">
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
                  value={this.state.title}
                  onChange={this.handleTitleChange}
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
                  value={this.state.tag}
                  onChange={this.handleTagChange}
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
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
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
                      value={this.state.start_time}
                      onChange={this.handleStartTimeChange}
                      disablePast
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
                      value={this.state.end_time}
                      onChange={this.handleEndTimeChange}
                      minDateTime={new Date(this.state.start_time).getTime()}
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
                  onClick={this.handleIsUrgentChange}
                />
              </div>
            </div>

            <div className="form-group row my-3">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
