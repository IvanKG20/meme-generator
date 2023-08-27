import React from "react";
import "./mainsection.css";
import testData from "../testData.json";
import { useState, useEffect } from "react";

const MainSection = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    image: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  const handleClick = () => {
    return setMeme((prevState) => {
      return {
        ...prevState,
        image:
          allMemeImages[Math.floor(Math.random() * allMemeImages.length)][
            "url"
          ],
      };
    });
  };

  const setTextImg = (event) => {
    const { type, name, value } = event.target;
    return setMeme((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, [meme]);

  console.log(allMemeImages);

  return (
    <div className="mainSection">
      <div action="" className="mainSection__form">
        <input
          type="text"
          name="topText"
          id=""
          value={meme.topText}
          onChange={setTextImg}
        />
        <input
          type="text"
          name="bottomText"
          id=""
          value={meme.bottomText}
          onChange={setTextImg}
        />
        <button onClick={handleClick}>Generate a meme</button>
      </div>
      <div className="meme">
        <img src={meme.image} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
};

export default MainSection;
