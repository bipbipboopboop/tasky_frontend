import React from "react";
import Instruction from "./Instruction";
import gif1 from "../gifs/1.gif";
import gif2 from "../gifs/2.gif";
import pic1 from "../gifs/pic1.png";
export const Instructions = () => {
  return (
    <div>
      <div
        className="d-flex flex-column align-items-center"
        style={{ backgroundColor: "#f8ac6a" }}
      >
        <Instruction
          instruction={"Create an account if you don't already have one"}
          src={gif1}
        />

        <Instruction instruction={"Sign In if you do"} src={gif2} />
        <Instruction instruction={"This is the Tasks page"} src={pic1} />
        {/* <Instruction
          instruction={
            "Create a new task by clicking on the Create button on the top right hand corner"
          }
          src={gif2}
        />
        <Instruction
          instruction={"Tick urgent if it's important!"}
          src={gif2}
        />
        <Instruction
          instruction={
            "Your tasks will appear in the Tasks page. Urgent Tasks will appear in the Urgent Section and Completed Tasks in the Completed Section"
          }
          src={gif2}
        /> */}
      </div>
    </div>
  );
};
