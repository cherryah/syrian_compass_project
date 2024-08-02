import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Locations from "./Pages/Locations";
import Resturants from "./Pages/Resturants";
import Hotels from "./Pages/Hotels";
import Events from "./Pages/Events";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login}></Route>
        <Route path="/locations" Component={Locations}></Route>
        <Route path="/resturants" Component={Resturants}></Route>
        <Route path="/hotels" Component={Hotels}></Route>
        <Route path="/events" Component={Events}></Route>
        <Route path="/profile" Component={Profile}></Route>
      </Routes>
    </Router>
  );
}

export default App;
