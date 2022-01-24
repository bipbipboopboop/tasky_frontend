import React, { Component } from "react";

export default class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api_url: `http://localhost:3001/api/v1/tasks`,
      title: "",
      tag: "",
      description: "",
      isUrgent: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.handleIsUrgentChange = this.handleIsUrgentChange.bind(this);
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
  handleIsUrgentChange(event) {
    this.setState(
      ({ isUrgent }) => ({
        isUrgent: !isUrgent,
      }),
      function () {
        // console.log(this.state.isUrgent);
      }
    );
    // console.log(event.target.checked);
  }
  async formSubmit() {
    var data = new FormData();
    data.append("task[title]", this.state.title);
    data.append("task[description]", this.state.description);
    data.append("task[tag]", this.state.tag);
    data.append("task[is_urgent]", this.state.isUrgent);
    data.append("task[is_completed]", false);

    await fetch(this.state.api_url, {
      method: "POST",
      mode: "cors",
      body: data,
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
    }).then((res) => {
      if (res.status == 201) {
        // window.location.replace("http://localhost:3000/tasks");
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
