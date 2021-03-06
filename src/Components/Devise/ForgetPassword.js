import React, { Component } from "react";

export default class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api_url: ` https://cvwo-tasky-backend.herokuapp.com/users/password`,
      sign_in_url: `https://cvwo-tasky.netlify.app/signin`,
      // api_url: `http://localhost:3001/users/password`,
      // sign_in_url: `http://localhost:3000/signin`,
      password: "",
      confirm_password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange =
      this.handleConfirmPasswordChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password === this.state.confirm_password) {
      this.formSubmit(event.target);
    }
    this.setState({ email: "", password: "", confirm_password: "" });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
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
    data.append("email", this.state.email);
    data.append("new_password", this.state.password);
    data.append("confirm_password", this.state.password);

    await fetch(this.state.api_url, {
      method: "POST",
      mode: "cors",
      body: data,
    }).then((res) => {
      if (res.status === 200) {
        window.location.replace(this.state.sign_in_url);
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
          <h2>Forget password</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group my-2">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group my-2">
              <label htmlFor="password">
                New Password (Minimum 6 Characters)
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                minLength={6}
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
                minLength={6}
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
