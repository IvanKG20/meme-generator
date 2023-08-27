import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const header = () => {
  return (
    <div className="header">
      <div>Meme Generator</div>
      <Link to="/Forms">Forms Page</Link>
      <Link to="/MainSection">Meme Page</Link>
      <div>React Course - Project 3</div>
    </div>
  );
};

export default header;
