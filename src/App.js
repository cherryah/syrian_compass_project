import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";
import Main  from "./Pages/Main";

// import Test from "./Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Landing}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/signup" Component={Signup}></Route>
        <Route path="/Main" Component={Main}></Route>

        {/* <Route path="/" Component={Test}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
