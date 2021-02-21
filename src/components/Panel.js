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

const Panel = ({ adventure, backpack, character, backgroundColor }) => {
  return (
    <UICharacterInfo backgroundColor={backgroundColor}>
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
