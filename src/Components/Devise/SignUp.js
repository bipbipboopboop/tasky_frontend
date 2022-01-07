import React from "react";

const SignUp = () => {
  return (
    <div className="row my-5 align-items-center justify-content-center">
      <div
        className="card p-5"
        style={{ width: "25rem", borderRadius: "1rem" }}
      >
        <h2>Sign Up</h2>
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
            <label for="password">Password (Minimum 6 Characters)</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div class="form-group my-2">
            <label for="password">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter your password again"
            />
          </div>

          <button type="submit" class="btn btn-primary my-2">
            Sign Me Up!
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
