import React, { Component } from "react";
import Task from "./Task";
const api_url = `http://localhost:3001/api/v1/tasks`;

class Tasks extends Component {
  //awake()
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
    this.deleteItem = this.deleteItem.bind(this);
  }
  // start()

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    fetch(api_url)
      .then((response) => response.json())
      .then((response_items) => {
        this.setState({
          // items: response_items.reverse(),
          items: response_items,
        });
      });
  }

  deleteItem(item) {
    var deleteURL = api_url + `/${item.id}`;
    fetch(deleteURL, {
      method: "DELETE",
    }).then(() => {
      // Client side delete
      //To be completed
      var _items = this.state.items;
      var index = _items.indexOf(item);
      _items.splice(index, 1);
      this.setState({
        items: _items,
      });
    });
  }
  render() {
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
        {this.state.items.map((item) => (
          <div className="p-2">
            <Task key={item.id} item={item} deleteItem={this.deleteItem} />
          </div>
        ))}
      </div>
    );
  }
}

export default Tasks;
