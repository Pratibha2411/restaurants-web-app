import React from "react";
import "./components/sidebar/Sidebar.css";
import "./components/navbar/Navbar.css";
// import "./components/SearchBar/SearchBar.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Categories from "./components/categories/Categories";
// import SearchBar from "./components/SearchBar/SearchBar";

// Pages
import Home from "./pages/Home.jsx";
import Orders from "./pages/Orders.jsx";
import Notifications from "./pages/Notifications.jsx";
import HelpAndSupport from "./pages/HelpAndSupport.jsx";
import Settings from "./pages/Settings.jsx";

const App = () => {

  return (
    <>
      <BrowserRouter>

        <Sidebar>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/helpAndSupport" element={<HelpAndSupport />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>

          <Navbar />
          <Categories />
          {/* <SearchBar/> */}
        </Sidebar>
      </BrowserRouter>
    </>
  );
};

export default App;
