import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";
import Main  from "./Pages/Main";
import Profile from "./Pages/Profile";
import Destinations from "./Pages/Destinations";
import Events from "./Pages/Events"; 
import Resturants from "./Pages/Resturants"; 
import Hotels from "./Pages/Hotels";
import Locations from "./Pages/Locations";
import Search from './Pages/Search'
import Details from "./Pages/Details";
import EventDetails from "./Pages/EventDetails";

// import Test from "./iTest";

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
        <Route path="/events" Component={Events}></Route>
        <Route path="/resturants" Component={Resturants}></Route>
        <Route path="/hotels" Component={Hotels}></Route>
        <Route path="/locations" Component={Locations}></Route>
        <Route path="/search" Component={Search}></Route>
        <Route path="/details/:id" Component={Details}></Route>
        <Route path="/event_details/:id" Component={EventDetails}></Route>
      </Routes>
    </Router>
  );
}

export default App;
