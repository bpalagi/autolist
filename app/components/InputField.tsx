import React, { useRef } from "react";
import "./styles.css";

interface props {
  profileInput: string;
  setProfileInput: React.Dispatch<React.SetStateAction<string>>;
  handleGo: (e: React.FormEvent) => void;
}

const InputField: React.FC<props> = ({ profileInput, setProfileInput, handleGo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleGo(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        placeholder="Search Profiles..."
        value={profileInput}
        ref={inputRef}
        onChange={(e) => setProfileInput(e.target.value)}
        className="input__box"
      />
      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
