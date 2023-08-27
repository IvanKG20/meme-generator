import { useState } from "react";
import Header from "./components/header";
import MainSection from "./components/MainSection";
import Forms from "./components/forms";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/Forms" element={<Forms />}></Route>
        <Route path="/MainSection" element={<MainSection />}></Route>
      </Routes>
    </>
  );
}

export default App;
