import { borderRadius } from "@mui/system";
import React from "react";

const Instruction = (props) => {
  return (
    <div
      className="card p-4 m-5"
      style={{ minWidth: "100vh", minHeight: "50vh", borderRadius: "1rem" }}
    >
      <img
        className="card-img-top"
        src={props.src}
        style={{ minWidth: "80vh", minHeight: "50vh" }}
      />
      <div className="card-body">
        <p className="card-text">{props.instruction}</p>
      </div>
    </div>
    // {/* <div className="d-flex">
    //   <div>
    //     <h2>{props.instruction}</h2>
    //   </div>
    //   <div>
    //     {/* <img src={props.src} /> */}
    //     <img src={props.src} className="img-fluid" />
    //   </div>
    // </div> */}
  );
};

export default Instruction;
