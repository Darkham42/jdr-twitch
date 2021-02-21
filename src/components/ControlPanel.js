import React, { useState } from "react";
import { Fab } from "./styled/UIButtons";
import {
  UIControlPanel,
  UIControlPanelTitle,
  UIControlPanelMoreLess,
  UIControlPanelInput,
  UIControlPanelTable,
} from "./styled/UIControlPanel";
import { UIButton } from "./styled/UIButtons";
import Grimoire from "./Grimoire";
import Backpack from "./Backpack";

const ControlPanel = ({
  adventure,
  backpack,
  character,
  initial,
  setStoredAdventure,
  setStoredBackpack,
  setStoredCharacter,
}) => {
  const [displayControlPanel, setDisplayControlPanel] = useState(true);

  const changeAdventure = (attribut, type = "-") => {
    const newAdventure = { ...adventure };

    if (attribut === "canInvokeLibra") {
      if (adventure.canInvokeLibra) {
        newAdventure[attribut] = !newAdventure[attribut];
        setStoredAdventure(newAdventure);
      } else {
        console.warn("ne peut être invoqué plusieurs fois");
      }
    } else {
      if (type === "+") {
        newAdventure[attribut] += 1;
      } else {
        newAdventure[attribut] -= 1;
      }

      if (newAdventure[attribut] < 0) {
        console.warn("ne peut pas être en dessous");
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
      console.warn("ne peut pas être en dessous");
    } else if (initial[attribut] >= newCharacter[attribut]) {
      setStoredCharacter(newCharacter);
    } else {
      console.warn("ne peut être au dessus");
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
          <UIButton key={key} disabled={!object[key]} content={key} onClick={() => (type === "char" ? changeCharacter(key) : changeAdventure(key))} />
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
        </UIControlPanel>
      )}
      <Fab onClick={() => setDisplayControlPanel(!displayControlPanel)}>+</Fab>
    </>
  );
};

export default ControlPanel;
