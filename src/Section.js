import React, { useState } from "react";
import axios from "axios";

export default function Section(props) {
  console.log(props.dictionary);
  if (props.dictionary !== null) {
    return (
      <section className="part">
        <h1>{props.dictionary.word}</h1>
      </section>
    );
  } else {
    return <h1>Loading</h1>;
  }
}
