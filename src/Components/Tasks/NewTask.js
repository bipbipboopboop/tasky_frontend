import React, { Component } from "react";

export default class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api_url: props.api_url,
      title: "",
      description: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.formSubmit(event.target);
  }
  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }
  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value,
    });
  }
  async formSubmit(formData) {
    var data = new FormData(formData);
    await fetch(this.state.api_url, {
      method: "POST",
      mode: "cors",
      body: data,
    })
      .then((response) => response.json())
      .then((response) => this.props.updateTasks(response));
  }

  render() {
    return (
      <div className="container">
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
                onChange={this.handleTitleChange}
              />
            </div>
          </div>
          {/* <div className="form-group row my-2">
            <label htmlFor="category" className="col-sm-2 col-form-label">
              Category
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="category"
                placeholder="Category"
              />
            </div>
          </div> */}
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
                onChange={this.handleDescriptionChange}
              />
            </div>
          </div>
          {/* <div className="form-group row my-2">
            <div className="col">
              <label htmlFor="start" className="col-sm-2 col-form-label">
                Start
              </label>
              <div className="col-sm-10">
                <input
                  type="time"
                  className="form-control"
                  id="start_time"
                  //   placeholder="Start"
                />
              </div>
            </div>
            <div className="col">
              <label htmlFor="end_time" className="col-sm-2 col-form-label">
                End
              </label>
              <div className="col-sm-10">
                <input
                  type="time"
                  className="form-control"
                  id="end_time"
                  //   placeholder="End"
                />
              </div>
            </div>
          </div> */}

          <div className="form-group row my-3">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
