import React, { useEffect, useState } from "react";
import Task from "./Task";

const Tasks = () => {
  const [items, setItems] = useState();
  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/tasks`)
      .then((response) => response.json())
      .then((response_items) => {
        console.log(response_items);
        setItems(response_items);
      });
  }, []);

  //DELETE Request
  const deleteItem = (item) => {
    var deleteURL = `http://localhost:3001/api/v1/tasks` + `/${item.id}`;
    fetch(deleteURL, {
      method: "DELETE",
    }).then(() => {
      // Client side delete
      //To be completed
      var _items = items;
      var index = _items.indexOf(item);
      _items.splice(index, 1);
      setItems(_items);
    });
  };
  return (
    <div
      className="d-flex flex-column"
      style={{
        // position: "absolute",
        // left: "40%",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#f7e7ce",
      }}
    >
      <h2>Tasks to be completed</h2>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search for Task"
            aria-label="Search for Task"
          />
        </form>
      </ul>

      {items &&
        items.map((item) => (
          <div className="p-2">
            <Task key={item.id} item={item} deleteItem={deleteItem} />
          </div>
        ))}
    </div>
  );
};

export default Tasks;
