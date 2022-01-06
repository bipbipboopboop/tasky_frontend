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
  return (
    <ul>
      <li>{props.item.title}</li>
      <li>{props.item.description}</li>
    </ul>
  );
};

export default Task;
