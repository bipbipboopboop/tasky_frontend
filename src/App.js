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
import ForgetPassword from "./Components/Devise/ForgetPassword";
import UserSettings from "./Components/Devise/UserSettings";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundColor: "#f7e7ce" }}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>

      <Routes>
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
      <Routes>
        <Route path="/newtask" element={<NewTask />} />
      </Routes>
      <Routes>
        <Route path="/tasks/:id" element={<TaskDetailed />} />
      </Routes>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Routes>
        <Route path="/settings" element={<UserSettings />} />
      </Routes>
      <Routes>
        <Route path="/forgotpassword" element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
