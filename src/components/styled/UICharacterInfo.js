import styled from "styled-components";

export const UICharacterInfo = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: 100vw;
  height: 100vh;
  font-size: 2.5vw;
`;

export const UIPanels = styled.div`
  background: url("assets/images/background.png") no-repeat;
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
`;

export const UIPortrait = styled.div`
  background: url("assets/images/current.png") no-repeat;
  background-size: 33% 70%;
  background-position: 0% 95%;
  height: 100%;
  width: 100%;
`;

export const UIStamina = styled.div`
  position: absolute;
  left: 15%;
  top: 20%;
`;

export const UISkills = styled.div`
  position: absolute;
  left: 22.5%;
  top: 14%;
`;

export const UILuck = styled.div`
  position: absolute;
  left: 22.25%;
  top: 27.5%;
`;
export const UIGold = styled.div`
  position: absolute;
  left: 21%;
  top: 82%;
`;

export const UIBackpack = styled.div`
  position: absolute;
  white-space: pre-wrap;
  font-size: 1.5vw;
  line-height: 125%;
  left: 23.5%;
  top: 47%;
`;
