import { SAVE_EDIT, START_EDIT, CANCEL_EDIT, MOVE_SLIDER, CHANGE_IMAGE, SHOW_HELP, HIDE_HELP } from "./types";

export function doSaveEdit() {
  return {
    type: SAVE_EDIT
  };
}

export function doStartEdit(sliderName) {
  return {
    type: START_EDIT,
    payload: {
      activeSlider: sliderName
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
  }
}

export function doHideHelp() {
  return {
    type: HIDE_HELP
  }
}