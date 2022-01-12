import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App(props) {
  const [word, setWord] = useState(props.word);

  function showWord(response) {
    console.log(response.data[0]);
  }

  function changeWord(event) {
    event.preventDefault();
    setWord(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(showWord);
  }
  return (
    <div className="container">
      <a href="https://www.shecodes.io/" title="shecodes">
        <img
          alt="shecodes"
          src="https://www.shecodes.io/assets/branding/logo-shecodes-f9fa0540d113c086f61eb6e89466c0cbd24a42163b6a96d4b01da078803f53ee.png"
        />
      </a>
      <header className="part">
        <h2>What word do you want to look up?</h2>
        <form onSubmit={search}>
          <input
            onChange={changeWord}
            type="text"
            placeholder="Search for a word"
          ></input>
        </form>
        <small>i.e. paris, wine, yoga, coding</small>
      </header>
    </div>
  );
}

export default App;
