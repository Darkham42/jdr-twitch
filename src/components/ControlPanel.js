import React, { useState } from "react";
import Backpack from "./Backpack";
import Grimoire from "./Grimoire";
import Options from "./Options";
import { useAlert } from 'react-alert'
import { Fab } from "./styled/UIButtons";
import { UIControlPanel, UIControlPanelTitle, UIControlPanelMoreLess } from "./styled/UIControlPanel";
import { UIButton } from "./styled/UIButtons";

const ControlPanel = ({
  adventure,
  backpack,
  character,
  initial,
  setStoredAdventure,
  setStoredBackpack,
  setStoredCharacter,
  backgroundColor,
  setBackgroundColor,
}) => {
  const [displayControlPanel, setDisplayControlPanel] = useState(true);
  const alert = useAlert()

  const changeAdventure = (attribut, type = "-") => {
    const newAdventure = { ...adventure };

    if (attribut === "canInvokeLibra") {
      if (adventure.canInvokeLibra) {
        newAdventure[attribut] = !newAdventure[attribut];
        setStoredAdventure(newAdventure);
      } else {
        alert.error("Libra can be invoked once !")
      }
    } else {
      if (type === "+") {
        newAdventure[attribut] += 1;
      } else {
        newAdventure[attribut] -= 1;
      }

      if (newAdventure[attribut] < 0) {
        alert.error(`${attribut} need to be > 0 !`)
      } else {
        setStoredAdventure(newAdventure);
      }
    }
  };

  const changeCharacter = (attribut, type = "-") => {
    const newCharacter = { ...character };

    if (type === "+") {
      newCharacter[attribut] += 1;
    } else {
      newCharacter[attribut] -= 1;
    }

    if (newCharacter[attribut] < 0) {
      alert.error(`${attribut} need to be > 0 !`)
    } else if (initial[attribut] >= newCharacter[attribut]) {
      setStoredCharacter(newCharacter);
    } else {
      alert.error(`${attribut} can't be > initial value (${initial[attribut]}) !`)
    }
  };

  const editNumberedStats = (type, object, boolOnly = false) => {
    return Object.keys(object).map((key) => {
      if (typeof object[key] === "number" && !boolOnly) {
        return (
          <UIControlPanelMoreLess key={key}>
            <UIButton circle onClick={() => (type === "char" ? changeCharacter(key, "-") : changeAdventure(key, "-"))}>
              -
            </UIButton>
            {key}
            <UIButton circle onClick={() => (type === "char" ? changeCharacter(key, "+") : changeAdventure(key, "+"))}>
              +
            </UIButton>
          </UIControlPanelMoreLess>
        );
      } else if (typeof object[key] === "boolean" && boolOnly) {
        return (
          <UIButton
            key={key}
            disabled={!object[key]}
            content={key}
            onClick={() => (type === "char" ? changeCharacter(key) : changeAdventure(key))}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      {displayControlPanel && (
        <UIControlPanel>
          <UIControlPanelTitle>Control Panel</UIControlPanelTitle>
          {editNumberedStats("char", character)}
          {editNumberedStats("adv", adventure)}
          <UIControlPanelTitle>inventory</UIControlPanelTitle>
          <Backpack backpack={backpack} setStoredBackpack={setStoredBackpack} />
          <UIControlPanelTitle>Others</UIControlPanelTitle>
          {editNumberedStats("adv", adventure, true)}
          <UIControlPanelTitle>Battle</UIControlPanelTitle>
          <div>TODO</div>
          <UIControlPanelTitle>Roll</UIControlPanelTitle>
          <div>TODO</div>
          <UIControlPanelTitle>Grimoire</UIControlPanelTitle>
          <Grimoire />
          <UIControlPanelTitle>Options</UIControlPanelTitle>
          <Options backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />
        </UIControlPanel>
      )}
      <Fab onClick={() => setDisplayControlPanel(!displayControlPanel)}>+</Fab>
    </>
  );
};

export default ControlPanel;
