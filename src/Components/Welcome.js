import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Tasks from "./Tasks/Tasks";
const Welcome = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Tasks />
    </div>
  );
};

export default Welcome;
