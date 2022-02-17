import "./main.scss";
import { useState } from "react";
import { FaClipboard } from "react-icons/fa";
import {
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
  numberList,
} from "./Characters";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(20);
  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const handlePasswordGenerator = () => {
    if (!upperCase && !lowerCase && !numbers && !symbols) {
      alert("Select at least one Category!!!");
    }

    let characterList = "";

    if (upperCase) {
      characterList = characterList + upperCaseLetters;
    }
    if (lowerCase) {
      characterList += lowerCaseLetters;
    }
    if (numbers) {
      characterList += numberList;
    }
    if (symbols) {
      characterList += specialCharacters;
    }

    setPassword(passwordCreator(characterList));
  };

  const passwordCreator = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = getRandomIndex(characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  };

  const getRandomIndex = (charactersListLength) => {
    return Math.round(Math.random() * charactersListLength);
  };

  return (
    <div className="container">
      <div className="generator">
        <h2 className="generator_header">Password Generator</h2>
        <div className="password_field">
          {password}
          <button className="btn_primary_clipboard">
            <FaClipboard />
          </button>
        </div>
        <div className="form-group">
          <label htmlFor="password-length">Password Length</label>
          <input
            name="password-length"
            id="password-length"
            type="number"
            max="20"
            min="7"
            defaultValue={passwordLength}
            onChange={(e) => {
              setPasswordLength(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="uppercase-letters">Include UpperCase</label>
          <input
            name="uppercase-letters"
            id="uppercase-letters"
            type="checkbox"
            checked={upperCase}
            onChange={(e) => {
              setUpperCase(e.target.checked);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lowercase-letters">Include LowerCase</label>
          <input
            name="lowercase-letters"
            id="lowercase-letters"
            type="checkbox"
            checked={lowerCase}
            onChange={(e) => {
              setLowerCase(e.target.checked);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="include-numbers">Include Numbers</label>
          <input
            name="include-numbers"
            id="include-numbers"
            type="checkbox"
            checked={numbers}
            onChange={(e) => {
              setNumbers(e.target.checked);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="include-symbols">Include Symbols</label>
          <input
            name="include-symbols"
            id="include-symbols"
            type="checkbox"
            checked={symbols}
            onChange={(e) => {
              setSymbols(e.target.checked);
            }}
          />
        </div>
        <div className="btn_position">
          <button
            className="generator_btn btn_primary"
            onClick={handlePasswordGenerator}
          >
            Generate New Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;