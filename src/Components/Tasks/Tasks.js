import React, { Component } from "react";
import NewTask from "./NewTask";
import Task from "./Task";
const api_url = `http://localhost:3001/api/v1/tasks`;

class Tasks extends Component {
  //awake()
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
    this.updateTasks = this.updateTasks.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  // start()

  componentDidMount() {
    this.getTasks();
  }

  // componentDidMount() {
  //   // Simple GET request using fetch
  //   fetch(api_url)
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ items: data }));
  //   console.log(this.items);
  // }
  getTasks() {
    fetch(api_url)
      .then((response) => response.json())
      .then((response_items) => {
        this.setState({
          items: response_items.reverse(),
        });
      });
  }

  updateTasks(item) {
    let _items = this.state.items;
    _items.unshift(item);
    this.setState({
      items: _items,
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
    // console.log(this.state.items);
    return (
      <div>
        <NewTask api_url={api_url} updateTasks={this.updateTasks} />

        <div className="d-flex flex-row">
          {this.state.items.map((item) => (
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
