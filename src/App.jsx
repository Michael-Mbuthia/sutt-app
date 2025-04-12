import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import "./App.css";
import Nav from "./Nav";
import Singles from "./categories/singles/Singles";
import Doubles from "./categories/doubles/Doubles";
import Under18 from "./categories/under-18/Under18";
import FamilyEvent from "./categories/family/FamilyEvent";
import MenSingles from "./categories/singles/menSingles";
import LadiesSingles from "./categories/singles/ladiesSingles";
import MensPools from "./categories/singles/pools/menPooling";
import MensKnockout from "./categories/singles/knockout/mensKnockout";
import LadiesPools from "./categories/singles/pools/ladiesPooling";
import LadiesKnockout from "./categories/singles/knockout/ladiesKnockout";
import MenDoubles from "./categories/doubles/menDoubles";
import LadiesDoubles from "./categories/doubles/ladiesDoubles";
import Boys from "./categories/under-18/Boys";
import Girls from "./categories/under-18/Girls";
import Boyspooling from "./categories/under-18/boys/Boyspooling";
import Boysknockout from "./categories/under-18/boys/Boysknockout";
import Girlspooling from "./categories/under-18/girls/Girlspooling";
import GirlsKnockout from "./categories/under-18/girls/Girlsknockout";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />
        /* Admin routes */
        <Route path="/admin/" element={<Admin />} />
        <Route path="/admin/singles" element={<Singles />} />
        <Route path="/admin/doubles" element={<Doubles />} />
        <Route path="/admin/under18" element={<Under18 />} />
        <Route path="/admin/family-event" element={<FamilyEvent />} />
        <Route path="/admin/singles/menSingles" element={<MenSingles />} />
        <Route
          path="/admin/singles/ladiesSingles"
          element={<LadiesSingles />}
        />
        <Route
          path="/admin/singles/menSingles/menPooling"
          element={<MensPools />}
        />
        <Route
          path="/admin/singles/menSingles/menKnockout"
          element={<MensKnockout />}
        />
        <Route
          path="/admin/singles/ladiesSingles/ladiesPooling"
          element={<LadiesPools />}
        />
        <Route
          path="/admin/singles/ladiesSingles/ladiesKnockout"
          element={<LadiesKnockout />}
        />
        <Route path="/admin/doubles/menDoubles" element={<MenDoubles />} />
        <Route
          path="/admin/doubles/ladiesDoubles"
          element={<LadiesDoubles />}
        />
        <Route path="/admin/under-18/Boys" element={<Boys />} />
        <Route path="/admin/under-18/Girls" element={<Girls />} />
        <Route
          path="/admin/under-18/Boys/Boyspooling"
          element={<Boyspooling />}
        />
        <Route
          path="/admin/under-18/Boys/Boysknockout"
          element={<Boysknockout />}
        />
        <Route
          path="/admin/under-18/Girls/Girlspooling"
          element={<Girlspooling />}
        />
        <Route
          path="/admin/under-18/Girls/GirlsKnockout"
          element={<GirlsKnockout />}
        />
        {/* Other routes */} ``
      </Routes>
    </div>
  );
}

export default App;
