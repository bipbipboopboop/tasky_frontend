import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Welcome from "./Components/Welcome";
import Navbar from "./Components/Navbar";

import SignUp from "./Components/Devise/SignUp";
import SignIn from "./Components/Devise/SignIn";

import TaskDetailed from "./Components/Tasks/TaskDetailed";
import Tasks from "./Components/Tasks/Tasks";
import NewTask from "./Components/Tasks/NewTask";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundColor: "#f7e7ce" }}>
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
      </Routes>

      <Routes>
        <Route exact path="/tasks" element={<Tasks />} />
      </Routes>
      <Routes>
        <Route path="/tasks/:id" element={<TaskDetailed />} />
      </Routes>
      <Routes>
        <Route exact path="/tasks/new" element={<NewTask />} />
      </Routes>

      <Routes>
        <Route exact path="/signin" element={<SignIn />} />
      </Routes>
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
