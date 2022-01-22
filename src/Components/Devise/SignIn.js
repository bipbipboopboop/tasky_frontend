import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // api_url: props.api_url,
      api_url: `http://localhost:3001/users/sign_in`,
      // user: { email: "", password: "" },
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.formSubmit(event.target);
    // this.state.astitle = "";
    // this.state.description = "";
    this.setState({ email: "", password: "" });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }
  async formSubmit() {
    var data = new FormData();
    // data.append("user", this.state.user);
    data.append("user[email]", this.state.email);
    data.append("user[password]", this.state.password);

    await fetch(this.state.api_url, {
      method: "POST",
      mode: "cors",
      body: data,
    })
      .then((res) => {
        console.log(res.headers.get("Authorization"));
        return res.headers.get("Authorization");
      })
      .then((authorization_header) => {
        console.log(authorization_header);
        fetch("http://localhost:3001/api/v1/tasks", {
          headers: {
            Authorization: authorization_header,
          },
        });
      });
  }
  render() {
    return (
      <div className="row my-5 justify-content-center align-items-center">
        <div
          className="card p-5"
          style={{ width: "20rem", borderRadius: "1rem" }}
        >
          <h1>Sign In</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group my-2">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
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
            <div class="form-group my-2">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </div>

            <button type="submit" className="btn btn-primary my-2">
              Sign In
            </button>
          </form>
          <div>
            <p>Don't have an account yet?</p>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}
