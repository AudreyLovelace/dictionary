import React, { useState } from "react";
import axios from "axios";
import Section from "./Section";
import "./App.css";

function App(props) {
  const [word, setWord] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [dictionary, setDictionary] = useState("");
  function showWord(response) {
    setDictionary(response.data[0]);
    console.log(response.data[0]);
  }

  function changeWord(event) {
    setWord(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    setSearchWord(word);
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
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
            type="search"
            placeholder="Search for a word"
          ></input>
        </form>
        <small>i.e. paris, wine, yoga, coding</small>
      </header>

      <Section dictionary={dictionary} />
    </div>
  );
}

export default App;
