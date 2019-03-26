import {
  SAVE_EDIT,
  START_EDIT,
  CANCEL_EDIT,
  MOVE_SLIDER,
  CHANGE_IMAGE,
  SHOW_HELP,
  HIDE_HELP,
  UNDO
} from "./types";
import Haptic from "react-native-haptic-feedback";


export function doSaveEdit() {
  return {
    type: SAVE_EDIT
  };
}

export function doStartEdit(sliderName) {
  let minSliderBound, maxSliderBound;
  switch (sliderName) {
    case "temperature":
      [minSliderBound, maxSliderBound, sliderStep] = [-1, 1, 0.1];
      break;
    case "contrast":
    case "saturation":
    case "brightness":
      [minSliderBound, maxSliderBound, sliderStep] = [0, 2, 0.1];
      break;
  }

  return {
    type: START_EDIT,
    payload: {
      activeSlider: sliderName,
      minSliderBound,
      maxSliderBound,
      sliderStep
    }
  };
}

export function doCancelEdit() {
  return {
    type: CANCEL_EDIT
  };
}

export function doMoveSlider(value) {
  return {
    type: MOVE_SLIDER,
    payload: {
      value
    }
  };
}

export function doChangeImage(image) {
  Haptic.trigger("impactLight", true);
  return {
    type: CHANGE_IMAGE,
    payload: {
      image
    }
  };
}

export function doShowHelp() {
  return {
    type: SHOW_HELP
  };
}

export function doHideHelp() {
  return {
    type: HIDE_HELP
  };
}

export function doUndo() {
  return {
    type: UNDO
  }
}