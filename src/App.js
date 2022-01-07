import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./Components/Welcome";
import SignUp from "./Components/Devise/SignUp";
import SignIn from "./Components/Devise/SignIn";
import TaskDetailed from "./Components/Tasks/TaskDetailed";
import Navbar from "./Components/Navbar";
import Tasks from "./Components/Tasks/Tasks";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Welcome /> */}
      <Tasks />
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <TaskDetailed /> */}
    </div>
  );
}

export default App;
