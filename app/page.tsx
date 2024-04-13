"use client"

import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import ProfileBasic from "./components/ProfileBasic";

const App: React.FC = () => {
  const [profileInput, setProfileInput] = useState<string>("")

  const handleGo = (e: React.FormEvent) => {
    e.preventDefault(); // prevents refresh on button click

    setProfileInput("");

    // make api call to Twitter for creating a new List called profileInput


    // make api call to Twitter for adding all followers of profileInput to the List
    

    
  };

  return (
    <div className="App">
      <span className="heading">Twitter List Generator</span>
      <InputField profileInput={profileInput} setProfileInput={setProfileInput} handleGo={handleGo} />
      <br />
      <ProfileBasic profileInput={profileInput} />
      <br />
    </div>
  );
};

export default App;

