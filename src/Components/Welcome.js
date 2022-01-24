import React from "react";
import Jumbotron from "./Jumbotron";

const Welcome = () => {
  return (
    <div>
      <Jumbotron />

      <div className="container">
        <div className="d-flex flex-column align-items-center">
          {/* Block */}
          <div className="d-flex">
            <div>
              <p>Create an account if you don't already have one</p>
            </div>
            <div>
              <p>Instruction Details</p>
            </div>
          </div>
          {/* Block */}
          {/* Block */}
          <div className="d-flex">
            <div>
              <p>Sign up if you do</p>
            </div>
            <div>
              <p>Instruction Details</p>
            </div>
          </div>
          {/* Block */}
          {/* Block */}
          <div className="d-flex">
            <div>
              <p>This is the Tasks page</p>
            </div>
            <div>
              <p>Instruction Details</p>
            </div>
          </div>
          {/* Block */}
          {/* Block */}
          <div className="d-flex">
            <div>
              <p>
                Create a new task by clicking on the Create button on the top
                right hand corner
              </p>
            </div>
            <div>
              <p>Instruction Details</p>
            </div>
          </div>
          {/* Block */}
          {/* Block */}
          <div className="d-flex">
            <div>
              <p>Write your tasks to be done</p>
            </div>
            <div>
              <p>Instruction Details</p>
            </div>
          </div>
          {/* Block */}
          {/* Block */}
          <div className="d-flex">
            <div>
              <p>Tick urgent if it's important!</p>
            </div>
            <div>
              <p>Instruction Details</p>
            </div>
          </div>
          {/* Block */}
          {/* Block */}
          <div className="d-flex">
            <div>
              <p>Tick urgent if it's important!</p>
            </div>
            <div>
              <p>Instruction</p>
            </div>
          </div>
          {/* Block */}
          {/* Block */}
          <div className="d-flex">
            <div>
              <p>
                Your tasks will appear in the Tasks page. Urgent Tasks will
                appear in the Urgent Section and Completed Tasks in the
                Completed Section
              </p>
            </div>
            <div>
              <p>Instruction</p>
            </div>
          </div>
          {/* Block */}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
