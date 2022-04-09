import React, { useEffect } from "react";
// import MemeData from "./MemeData";
export default function Meme() {
  //   const [url, seturl] = React.useState("https://i.imgflip.com/1bij.jpg");

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  })

  function handleClick() {
    const memesArray = allMemeImages;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const newurl = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: newurl,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }
  return (
    <section>
      <div className="form">
        <input
          type="text"
          className="form--input"
          // placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form--input"
          // placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={handleClick}>
          Get a new meme image
        </button>
      </div>
      <div className="meme--div">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text-top">{meme.topText}</h2>
        <h2 className="meme--text-bottom">{meme.bottomText}</h2>
      </div>
    </section>
  );
}
