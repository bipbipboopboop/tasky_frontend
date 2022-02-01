import React, { Component } from "react";

import Task from "./Task";

// const api_url = ` http://localhost:3001/api/v1/tasks`;
const api_url = `https://cvwo-tasky-backend.herokuapp.com/api/v1/tasks`;

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
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
    })
      .then((response) => response.json())
      .then((response_items) => {
        console.log(response_items);
        this.setState({
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
      // Main Div
      <div
        className="d-flex justify-content-center"
        style={{
          backgroundColor: "#f7e7ce",
          minHeight: "100vh",
          height: "100%",
        }}
      >
        <div className="d-flex flex-column p-2" style={{ minWidth: "100vh" }}>
          {/* Search */}
          <div>
            <input
              className="form-control me-2"
              style={{ borderRadius: "1rem" }}
              type="search"
              placeholder="Search for Task"
              aria-label="Search for Task"
              onChange={this.setSearchTerm}
            />
          </div>
          {/* Search */}
          {/* Cards */}
          <div className="d-flex justify-content-around">
            {/* Todo Card */}
            <div
              className="card p-1 m-3"
              style={{
                borderRadius: "1rem",
                backgroundColor: "#ffaa33",
                minWidth: "50vh",
                minHeight: "80vh",
                maxHeight: "80vh",
              }}
            >
              <div
                className="card-header"
                style={{
                  borderRadius: "1rem",
                  backgroundColor: "#ff7f50",
                }}
              >
                To-dos
              </div>
              <div
                className="card"
                style={{
                  borderRadius: "1rem",
                  backgroundColor: "#ffaa33",
                  overflow: "auto",
                }}
              >
                {/* <div
                  className="card-header"
                  style={{
                    borderRadius: "1rem",
                    backgroundColor: "#ff7f50",
                  }}
                >
                  To-dos
                </div> */}
                {this.state.items
                  .filter((val) => {
                    if (this.state.searchTerm === "") {
                      return val;
                    } else if (
                      val.tag
                        .toLowerCase()
                        .includes(this.state.searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .filter((item) => {
                    if (!item.is_urgent && !item.is_completed) {
                      return item;
                    }
                  })
                  .map((item) => (
                    <Task
                      key={item.id}
                      item={item}
                      deleteItem={this.deleteItem}
                    />
                  ))}
              </div>
              {/* Todo Card */}
            </div>
            {/* Urgent&Completed */}
            <div className="d-flex flex-column">
              {/* Urgent Card */}
              <div
                className="card p-1 m-3"
                style={{
                  borderRadius: "1rem",
                  backgroundColor: "#ffaa33",
                  minWidth: "50vh",
                  minHeight: "37vh",
                  maxHeight: "37vh",
                }}
              >
                <div
                  className="card-header"
                  style={{ borderRadius: "1rem", backgroundColor: "#ff7f50" }}
                >
                  Urgent
                </div>
                <div
                  className="card"
                  style={{
                    borderRadius: "1rem",
                    backgroundColor: "#ffaa33",
                    overflow: "auto",
                  }}
                >
                  {this.state.items
                    .filter((val) => {
                      if (this.state.searchTerm === "") {
                        return val;
                      } else if (
                        val.tag
                          .toLowerCase()
                          .includes(this.state.searchTerm.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .filter((item) => {
                      if (item.is_urgent) {
                        return item;
                      }
                    })
                    .map((item) => (
                      <Task
                        key={item.id}
                        item={item}
                        deleteItem={this.deleteItem}
                      />
                    ))}
                </div>
              </div>
              {/* Urgent Card */}
              {/* Completed Card */}
              <div
                className="card p-1 m-3"
                style={{
                  borderRadius: "1rem",
                  backgroundColor: "#ffaa33",
                  minHeight: "40vh",
                  maxHeight: "40vh",
                }}
              >
                <div
                  className="card-header"
                  style={{ borderRadius: "1rem", backgroundColor: "#ff7f50" }}
                >
                  Completed
                </div>
                <div
                  className="card"
                  style={{
                    borderRadius: "1rem",
                    backgroundColor: "#ffaa33",
                    overflow: "auto",
                  }}
                >
                  {this.state.items
                    .filter((val) => {
                      if (this.state.searchTerm === "") {
                        return val;
                      } else if (
                        val.tag
                          .toLowerCase()
                          .includes(this.state.searchTerm.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .filter((item) => {
                      if (item.is_completed) {
                        return item;
                      }
                    })
                    .map((item) => (
                      <Task
                        key={item.id}
                        item={item}
                        deleteItem={this.deleteItem}
                      />
                    ))}
                </div>
              </div>
              {/* Completed Card */}
            </div>
            {/* Urgent&Completed */}
          </div>
          {/* Cards */}
        </div>
      </div>
      //Main Div
    );
  }
}

export default Tasks;
