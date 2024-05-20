import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="page-top">
      <Nav />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/TripsList" Component={TripsList} />
        <Route path="/TripDetail/:tripId" Component={TripDetail} />

        {/* you can make up any name you want for the path as long as you use the same name consistently in other path link areas */}
      </Routes>
    </div>
  );
}

export default App;
