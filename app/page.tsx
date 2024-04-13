"use client"

import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";

const App: React.FC = () => {
  const [profileInput, setProfileInput] = useState<string>("")

  const handleGo = (e: React.FormEvent) => {
    e.preventDefault(); // prevents refresh on button click

    setProfileInput("");

    // RUN OUR TWITTER API CALLS HERE



  };

  return (
    <div>
      <div className="App">
        <span className="heading">Twitter List Generator</span>
        <InputField profileInput={profileInput} setProfileInput={setProfileInput} handleGo={handleGo} />
      </div>
      <a class="twitter-timeline" href="https://twitter.com/SahilBloom?ref_src=twsrc%5Etfw">Tweets by SahilBloom</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
  );
};

export default App;

