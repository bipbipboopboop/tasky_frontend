import React, { Component } from "react";

import Task from "./Task";

const api_url = `http://localhost:3001/api/v1/tasks`;

class Tasks extends Component {
  //awake()
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchTerm: "",
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.setSearchTerm = this.setSearchTerm.bind(this);
  }

  // start()
  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    fetch(api_url, {
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
    })
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
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
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
  setSearchTerm(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <div
        className="d-flex justify-content-center"
        style={{
          backgroundColor: "#f7e7ce",
          minHeight: "100vh",
          height: "100%",
          // position: "absolute",
          // left: "40%",
        }}
      >
        <div className="d-flex flex-column">
          <h2>Tasks to be completed</h2>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Calendar
                </a>
              </li> */}
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for Task"
                aria-label="Search for Task"
                onChange={this.setSearchTerm}
              />
            </form>
          </ul>
          {/* {this.state.items.map((item) => (
          <div className="p-2">
            <Task key={item.id} item={item} deleteItem={this.deleteItem} />
          </div>
        ))} */}
          {this.state.items
            .filter((val) => {
              if (this.state.searchTerm == "") {
                return val;
              } else if (
                val.tag
                  .toLowerCase()
                  .includes(this.state.searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item) => (
              <div className="p-2">
                <Task key={item.id} item={item} deleteItem={this.deleteItem} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Tasks;
