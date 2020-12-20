import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😰": "worried",
  "❤": "love",
  "😎": "cool",
  "😁": "grinning",
  "🤣": "rolling on the floor laughing",
  "😉": "wink"
};

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    console.log(event.target.value);
    var meaningValue = event.target.value;
    var meaning = emojiDictionary[meaningValue];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiclickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  var emojisweknow = Object.keys(emojiDictionary);

  return (
    <body>
      <div className="App">
        <h1>What do they mean?</h1>
        <input onChange={emojiHandler}></input>
        <h2>{meaning}</h2>
        <h3>emojis we know</h3>
        {emojisweknow.map((emoji) => {
          return (
            <span
              onClick={() => emojiclickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}{" "}
            </span>
          );
        })}
      </div>
    </body>
  );
}
