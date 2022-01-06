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
  render() {
    return (
      <div>
        <NewTask api_url={api_url} updateTasks={this.updateTasks} />
        <ul>
          {this.state.items.map((item) => (
            <Task key={item.id} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Tasks;
