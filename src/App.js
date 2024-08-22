import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";
import Main  from "./Pages/Main";
import Profile from "./Pages/Profile";
import Destinations from "./Pages/Destinations";

// import Test from "./Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Landing}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/signup" Component={Signup}></Route>
        <Route path="/governorate" Component={Main}></Route>
        <Route path="/profile" Component={Profile}></Route>
        <Route path="/destination" Component={Destinations}></Route>
        {/* <Route path="/" Component={Test}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
