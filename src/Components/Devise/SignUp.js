import React from "react";

const SignUp = () => {
  return (
    <div className="container py-3">
      <h1>Sign Up</h1>
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
  );
};

export default SignUp;
