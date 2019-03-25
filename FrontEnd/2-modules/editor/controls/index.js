import React from "react";
import SaveCancelMenu from "./SaveCancelMenu";
import MainMenu from "./MainMenu";
import { connect } from "react-redux";

const select = ({ editor }) => ({
  sliderIsActive: editor.activeSlider
});

function Controls({ sliderIsActive }) {
  return sliderIsActive ? <SaveCancelMenu /> : <MainMenu />;
}

export default connect(select)(Controls);
