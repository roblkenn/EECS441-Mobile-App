import {
  SAVE_EDIT,
  START_EDIT,
  CANCEL_EDIT,
  MOVE_SLIDER,
  CHANGE_IMAGE,
  SHOW_HELP,
  HIDE_HELP
} from "./types";

const initialState = {
  // image being shown
  currentImage: null,
  // settings
  contrast: 1,
  brightness: 1,
  highlights: 0,
  saturation: 1,
  temperature: 0,
  // value shown while editing, before save
  temporaryValue: null,
  // the slider name being used during edit
  activeSlider: null,
  scrollEnabled: true,
  help: false
};

export default function(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    // overrides one of the slider values
    case SAVE_EDIT:
      // Haptic.impact("medium");
      return {
        ...state,
        temporaryValue: null,
        [state.activeSlider]: state.temporaryValue,
        activeSlider: null,
        scrollEnabled: true
      };
    // begins editing process for slider
    case START_EDIT:
      return {
        ...state,
        scrollEnabled: false,
        activeSlider: payload.activeSlider,
        temporaryValue: state[payload.activeSlider]
      };
    // cancels editing process for slider
    case CANCEL_EDIT:
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
        currentImage: payload.image,
        contrast: 1,
        brightness: 1,
        highlights: 0,
        saturation: 1,
        temperature: 0
      };
    case SHOW_HELP:
      return {
        ...state,
        help: true,
        scrollEnabled: false
      };
    case HIDE_HELP:
      return {
        ...state,
        help: false,
        scrollEnabled: true
      };
    default:
      return state;
  }
}
