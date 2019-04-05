import {
  SAVE_EDIT,
  START_EDIT,
  CANCEL_EDIT,
  MOVE_SLIDER,
  CHANGE_IMAGE,
  SHOW_HELP,
  HIDE_HELP,
  UNDO,
  START_COMPARE,
  STOP_COMPARE,
  EXPORT_IMAGE,
  AUTO_EDIT,
  SET_ACTIVE_MODEL,
  CLEARED_HISTORY
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
      [minSliderBound, maxSliderBound, sliderStep] = [-1, 1, 0.01];
      break;
    case "contrast":
    case "saturation":
    case "brightness":
      [minSliderBound, maxSliderBound, sliderStep] = [0, 2, 0.01];
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
  };
}

export function doStartCompare() {
  return {
    type: START_COMPARE
  };
}

export function doStopCompare() {
  return {
    type: STOP_COMPARE
  };
}

export function doExportImage() {
  return {
    type: EXPORT_IMAGE
  };
}

export function doSetActiveModel(model) {
  return {
    type: SET_ACTIVE_MODEL,
    payload: { model }
  };
}

export function doClearHistory() {
  return {
    type: CLEARED_HISTORY
  };
}

export function doAutoEdit() {
  return (dispatch, getState) => {
    const { editHistory, externalModel } = getState().editor;
    if (externalModel) {
      dispatch({
        type: AUTO_EDIT,
        payload: {
          settings: {
            temperature: externalModel.temperature,
            brightness: externalModel.brightness,
            contrast: externalModel.contrast,
            saturation: externalModel.saturation
          }
        }
      });
      return;
    }
    // calc means
    if (editHistory.length) {
      let avgTemp = 0;
      let avgBrightness = 0;
      let avgSaturation = 0;
      let avgContrast = 0;

      editHistory.map(state => {
        avgTemp += state.temperature;
        avgBrightness += state.brightness;
        avgSaturation += state.saturation;
        avgContrast += state.contrast;
      });

      avgTemp /= editHistory.length;
      avgBrightness /= editHistory.length;
      avgContrast /= editHistory.length;
      avgSaturation /= editHistory.length;

      dispatch({
        type: AUTO_EDIT,
        payload: {
          settings: {
            temperature: avgTemp,
            brightness: avgBrightness,
            contrast: avgContrast,
            saturation: avgSaturation
          }
        }
      });
    }

    // if we have no edit history
    if (!editHistory.length) {
      const max = 1;
      const min = -1;
      const getRandomValue = () => Math.random() * (max - min) + min;
      const temperature = getRandomValue();
      const brightness = getRandomValue();
      const contrast = getRandomValue();
      const saturation = getRandomValue();
      dispatch({
        type: AUTO_EDIT,
        payload: {
          settings: {
            temperature,
            brightness,
            contrast,
            saturation
          }
        }
      });
    }
  };
}
