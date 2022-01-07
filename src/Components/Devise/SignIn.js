import React from "react";

const SignUp = () => {
  return (
    <div className="row my-5 justify-content-center align-items-center">
      <div
        className="card p-5"
        style={{ width: "20rem", borderRadius: "1rem" }}
      >
        <h1>Sign In</h1>
        <form>
          <div class="form-group my-2">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
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
            />
          </div>

          <button type="submit" class="btn btn-primary my-2">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
