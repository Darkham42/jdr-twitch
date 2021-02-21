import styled, { css } from "styled-components";

export const Fab = styled.div`
  position: absolute;
  background-color: #e8c60a;
  color: black;
  font-family: "Nota Sans", sans-serif;
  font-size: 52px;
  line-height: 60px;
  text-align: center;
  box-shadow: 0 6px 10px 0 #666;
  border-radius: 50px;
  width: 70px;
  height: 70px;
  right: 50px;
  bottom: 50px;
  transition: all 0.1s ease-in-out;
  cursor: pointer;

  :hover {
    box-shadow: 0 6px 14px 0 #666;
    transform: scale(1.05);
  }
`;

export const UIButton = styled.div`
  ${(props) =>
    props.disabled
      ? css`
          background: #ff3232;
        `
      : css`
          background: #75b09c;
        `};
  ${(props) =>
    props.circle &&
    css`
      background: #e8c60a;
    `};
  color: ${(props) => (props.circle ? "black" : "white")};
  border-radius: ${(props) => (props.circle ? "50%" : "5px")};
  text-align: center;

  ${(props) =>
    props.circle &&
    css`
      width: 15px;
    `};
  ${(props) =>
    props.circle &&
    css`
      height: 15px;
    `};
  ${(props) =>
    props.circle &&
    css`
      line-height: 10px;
    `};

  padding: 5px;
  cursor: pointer;

  :after {
    ${(props) =>
      props.content === "canInvokeLibra" &&
      css`
        content: "Libra";
      `};
  }
`;
