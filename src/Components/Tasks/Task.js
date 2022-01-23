/*
Title:string
Description:string
Category:string
Tag:string
StartTime:int
EndTime:int
isUrgent:boolean
isCompleted:boolean
*/

import React from "react";
import { Link } from "react-router-dom";

const Task = (props) => {
  function handleDelete() {
    props.deleteItem(props.item);
  }

  return (
    <div
      className="card"
      style={{
        width: "15rem",
        height: "20rem",
        borderRadius: "1rem",
        backgroundColor: "#fc9e5a",
      }}
    >
      <div className="card-body">
        <h5
          className="card-title p-2"
          style={{ borderRadius: "1rem", backgroundColor: "#dc8b78" }}
        >
          {props.item.title}
        </h5>
        <p
          className="card-text p-1"
          style={{
            borderRadius: "0.5rem",
            height: "80%",
            backgroundColor: "#c39797",
          }}
        >
          {props.item.description}
        </p>
      </div>
      <Link to={`/tasks/${props.item.id}`} className="btn btn-secondary m-2">
        Edit
      </Link>

      <button className="btn btn-primary m-2" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Task;
