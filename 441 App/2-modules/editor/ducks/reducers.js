import {
  SAVE_EDIT,
  START_EDIT,
  CANCEL_EDIT,
  MOVE_SLIDER,
  CHANGE_IMAGE
} from "./types";
import { Haptic } from "expo";

const initialState = {
  // image being shown
  currentImage: require("../../../assets/photos/camel.jpg"),
  // settings
  contrast: 50,
  brightness: 50,
  highlights: 50,
  saturation: 50,
  temperature: 50,
  // value shown while editing, before save
  temporaryValue: null,
  // the slider name being used during edit
  activeSlider: null,
  scrollEnabled: true
};

export default function(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    // overrides one of the slider values
    case SAVE_EDIT:
      Haptic.impact("heavy");
      return {
        ...state,
        temporaryValue: null,
        [state.activeSlider]: state.temporaryValue,
        activeSlider: null,
        scrollEnabled: true
      };
    // begins editing process for slider
    case START_EDIT:
      Haptic.impact("light");
      return {
        ...state,
        scrollEnabled: false,
        activeSlider: payload.activeSlider,
        temporaryValue: state[payload.activeSlider]
      };
    // cancels editing process for slider
    case CANCEL_EDIT:
      Haptic.impact("light");
      return {
        ...state,
        scrollEnabled: true,
        temporaryValue: null,
        activeSlider: null
      };
    // records temporary value on slider move
    case MOVE_SLIDER:
      return {
        ...state,
        temporaryValue: payload.value
      };
    // change image
    case CHANGE_IMAGE:
      return {
        ...state,
        currentImage: payload.image
      };
    default:
      return state;
  }
}
