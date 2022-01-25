import React, { Component } from "react";

export default class UserSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // api_url: `http://localhost:3001/users/password`,
      api_url: ` https://cvwo-tasky-backend.herokuapp.com/users/password`,
      tasks_url: `https://cvwo-tasky.netlify.app//tasks`,
      password: "",
      confirm_password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange =
      this.handleConfirmPasswordChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password === this.state.confirm_password) {
      this.formSubmit(event.target);
    }
    this.setState({ password: "", confirm_password: "" });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }
  handleConfirmPasswordChange(event) {
    this.setState({
      confirm_password: event.target.value,
    });
  }
  async formSubmit() {
    var data = new FormData();
    data.append("new_password", this.state.password);
    data.append("confirm_password", this.state.password);

    await fetch(this.state.api_url, {
      method: "POST",
      mode: "cors",
      body: data,
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
    }).then((res) => {
      if (res.status == 200) {
        window.location.replace(this.state.tasks_url);
      }
    });
  }
  render() {
    return (
      <div className="row my-5 align-items-center justify-content-center">
        <div
          className="card p-5"
          style={{ width: "25rem", borderRadius: "1rem" }}
        >
          <h2>Settings</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group my-2">
              <label htmlFor="password">
                New Password (Minimum 6 Characters)
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password again"
                value={this.state.confirm_password}
                onChange={this.handleConfirmPasswordChange}
              />
            </div>

            <button type="submit" className="btn btn-primary my-2">
              Change Password
            </button>
          </form>
        </div>
      </div>
    );
  }
}
