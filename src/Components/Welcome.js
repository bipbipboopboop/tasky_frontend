import React from "react";
import Jumbotron from "./Jumbotron";
import { Instructions } from "./Instructions";
const Welcome = () => {
  return (
    <div>
      <Jumbotron />

      <div>
        <Instructions />
      </div>
    </div>
  );
};

export default Welcome;
