import React, { useEffect, useState } from "react";
import Tools from "./components/Tools";
import Panel from "./components/Panel";
import { createCharacter, getItem, setHistory, storageAvailable } from "./utils/tools";
import "./App.css";

function App() {
  const [storedAdventure, setStoredAdventure] = useState(null);
  const [storedBackpack, setStoredBackpack] = useState(null);
  const [storedCharacter, setStoredCharacter] = useState(null);
  const [storedInitialCharacter, setStoredInitialCharacter] = useState(null);

  const initApp = () => {
    if (storageAvailable("localStorage")) {
      const adventure = getItem("adventure");
      const backpack = getItem("backpack");
      const character = getItem("character");
      const initial = getItem("initial");

      if (!character && !initial) {
        createCharacter("", setStoredAdventure, setStoredBackpack, setStoredCharacter, setStoredInitialCharacter);
      } else if (!adventure && !backpack) {
        console.warn("display erreur");
      } else {
        setStoredAdventure(adventure);
        setStoredBackpack(backpack);
        setStoredCharacter(character);
        setStoredInitialCharacter(initial);
      }
    }
  };

  useEffect(() => {
    initApp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (storedAdventure) {
      setHistory("adventure", storedAdventure);
    }
  }, [storedAdventure]);

  useEffect(() => {
    if (storedBackpack) {
      setHistory("backpack", storedBackpack);
    }
  }, [storedBackpack]);

  useEffect(() => {
    if (storedCharacter) {
      setHistory("character", storedCharacter);
    }
  }, [storedCharacter]);

  return storedCharacter && storedBackpack && storedAdventure ? (
    <>
      <Panel adventure={storedAdventure} backpack={storedBackpack} character={storedCharacter} />
      <Tools
        adventure={storedAdventure}
        backpack={storedBackpack}
        character={storedCharacter}
        initial={storedInitialCharacter}
        setStoredAdventure={setStoredAdventure}
        setStoredBackpack={setStoredBackpack}
        setStoredCharacter={setStoredCharacter}
      />
    </>
  ) : (
    <div>Character Creation</div>
  );
}

export default App;
