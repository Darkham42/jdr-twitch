import React, { useEffect, useState } from "react";
import ControlPanel from "./components/ControlPanel";
import Panel from "./components/Panel";
import { createCharacter, getItem, setHistory, storageAvailable } from "./utils/tools";
import "./App.css";

function App() {
  const [storedAdventure, setStoredAdventure] = useState(null);
  const [storedBackpack, setStoredBackpack] = useState(null);
  const [storedCharacter, setStoredCharacter] = useState(null);
  const [storedInitialCharacter, setStoredInitialCharacter] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("#231F41");

  const initApp = () => {
    if (storageAvailable("localStorage")) {
      const adventure = getItem("adventure");
      const backpack = getItem("backpack");
      const character = getItem("character");
      const initial = getItem("initial");
      const background = getItem("jdr-background-color");

      if (background) {
        setBackgroundColor(background);
      }

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
    if (backgroundColor) {
      setHistory("jdr-background-color", backgroundColor);
    }
  }, [backgroundColor]);

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
      <Panel
        adventure={storedAdventure}
        backpack={storedBackpack}
        character={storedCharacter}
        backgroundColor={backgroundColor}
      />
      <ControlPanel
        adventure={storedAdventure}
        backpack={storedBackpack}
        character={storedCharacter}
        initial={storedInitialCharacter}
        setStoredAdventure={setStoredAdventure}
        setStoredBackpack={setStoredBackpack}
        setStoredCharacter={setStoredCharacter}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
      />
    </>
  ) : (
    <div>Character Creation</div>
  );
}

export default App;
