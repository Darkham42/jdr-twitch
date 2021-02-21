import React from "react";
import {
  UICharacterInfo,
  UIPanels,
  UIPortrait,
  UIStamina,
  UISkills,
  UILuck,
  UIGold,
  UIBackpack,
} from "./styled/UICharacterInfo";

const Panel = (props) => {
  const { adventure, backpack, character } = props;

  return (
    <UICharacterInfo>
      <UIPanels>
        <UIPortrait />
        <UIStamina>{character.stamina}</UIStamina>
        <UISkills>{character.skills}</UISkills>
        <UILuck>{character.luck}</UILuck>
        <UIGold>{adventure.gold}</UIGold>
        <UIBackpack>{Object.keys(backpack).map((obj) => `x${backpack[obj]} ${obj}\n`)}</UIBackpack>
      </UIPanels>
    </UICharacterInfo>
  );
};

export default Panel;
