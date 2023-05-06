import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/topbar";
import Home from "./components/home-page";
import Footer from "./components/footer";
import ListView from "./components/list-view";
import allDetails from "./constants/movies.json";

const uniqTypes:string[] = [...new Set(allDetails.entries.map((e=> e.programType))) as any];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <TopBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {uniqTypes.map((e)=> <Route key={e} path={e} element={<ListView />} />)}
      </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
