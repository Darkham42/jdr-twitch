import React from "react";
import { SketchPicker } from "react-color";
import { UIControlPanelOptionsTitle } from "./styled/UIControlPanel";

const Options = ({ backgroundColor, setBackgroundColor }) => {
  return (
    <>
      <UIControlPanelOptionsTitle>Change background color :</UIControlPanelOptionsTitle>
      <SketchPicker
        className={"test"}
        color={backgroundColor}
        onChangeComplete={(color) => {
          const { r, g, b, a } = color.rgb;

          setBackgroundColor(`rgba(${r}, ${g}, ${b}, ${a})`);
        }}
      />
    </>
  );
};

export default Options;
