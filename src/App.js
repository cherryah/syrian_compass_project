import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Locations from "./Pages/Locations";
import Resturants from "./Pages/Resturants";
import Hotels from "./Pages/Hotels";
import Events from "./Pages/Events";
import Details from "./Pages/Details";
import EventDetails from "./Pages/EventDetails";
import Search from "./Pages/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login}></Route>
        <Route path="/locations" Component={Locations}></Route>
        <Route path="/resturants" Component={Resturants}></Route>
        <Route path="/hotels" Component={Hotels}></Route>
        <Route path="/events" Component={Events}></Route>
        <Route path="/details/:id" Component={Details}></Route>
        <Route path="/event_details/:id" Component={EventDetails}></Route>
        <Route path="/search" Component={Search}></Route>
      </Routes>
    </Router>
  );
}

export default App;
