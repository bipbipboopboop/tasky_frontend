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

const Task = (props) => {
  function handleDelete() {
    props.deleteItem(props.item);
  }
  return (
    <div className="card" style={{ width: "20rem", borderRadius: "1rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.item.title}</h5>
        <p className="card-text">{props.item.description}</p>
        <a href="#" className="card-link">
          Edit
        </a>
        <button className="btn btn-primary mx-2" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
