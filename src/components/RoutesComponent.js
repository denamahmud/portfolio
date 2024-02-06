import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Crud from "../pages/Crud";
import Movies from "../pages/Movies";
import Weather from "../pages/Weather";
import Fitness from "../pages/Fitness"; 

function RoutesComponent() {
  return (
    <BrowserRouter> 
      <HashRouter>
        <Route path="/" element={<Home />} />
        <Route path="/crud" element={<Crud />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/fitness" element={<Fitness />} />
      </HashRouter>
    </BrowserRouter>
  );
}

export default RoutesComponent;
