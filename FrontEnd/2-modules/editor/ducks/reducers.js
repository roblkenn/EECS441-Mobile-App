import {
  SAVE_EDIT,
  START_EDIT,
  CANCEL_EDIT,
  MOVE_SLIDER,
  CHANGE_IMAGE,
  SHOW_HELP,
  HIDE_HELP,
  UNDO,
  STOP_COMPARE,
  START_COMPARE,
  AUTO_EDIT,
  EXPORT_IMAGE,
  SET_ACTIVE_MODEL
} from "./types";

import Haptic from "react-native-haptic-feedback";

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
  // and slider specifications
  activeSlider: null,
  minSliderBound: null,
  maxSliderBound: null,
  sliderStep: null,
  // disables scrolling
  scrollEnabled: true,
  // shows help page
  help: false,
  // edit history
  history: [],
  // used to remember the original values
  // when compare overwrites them
  copyOfSettingsForCompare: {
    contrast: null,
    brightness: null,
    highlights: null,
    saturation: null,
    temperature: null
  },
  editHistory: [],
  externalModel: null
};

export default function(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    // overrides one of the slider values
    case SAVE_EDIT:
      Haptic.trigger("impactLight", true);
      return {
        ...state,
        temporaryValue: null,
        [state.activeSlider]: state.temporaryValue,
        activeSlider: null,
        scrollEnabled: true,
        history: [
          ...state.history,
          {
            sliderName: state.activeSlider,
            previousValue: state[state.activeSlider]
          }
        ]
      };
    // begins editing process for slider
    case START_EDIT:
      return {
        ...state,
        scrollEnabled: false,
        activeSlider: payload.activeSlider,
        temporaryValue: state[payload.activeSlider],
        minSliderBound: payload.minSliderBound,
        maxSliderBound: payload.maxSliderBound,
        sliderStep: payload.sliderStep
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
        temperature: 0,
        history: []
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
    case UNDO:
      let { sliderName, previousValue } = state.history.slice(-1)[0];
      return {
        ...state,
        history: state.history.slice(0, -1),
        [sliderName]: previousValue
      };
    case START_COMPARE:
      return {
        ...state,
        copyOfSettingsForCompare: {
          contrast: state.contrast,
          brightness: state.brightness,
          highlights: state.highlights,
          saturation: state.saturation,
          temperature: state.temperature
        },
        contrast: 1,
        brightness: 1,
        highlights: 0,
        saturation: 1,
        temperature: 0
      };
    case STOP_COMPARE:
      return {
        ...state,
        ...state.copyOfSettingsForCompare,
        copyOfSettingsForCompare: {}
      };
    case AUTO_EDIT:
      return {
        ...state,
        ...payload.settings
      };
    case EXPORT_IMAGE:
      return {
        ...state,
        editHistory: [
          ...state.editHistory,
          {
            temperature: state.temperature,
            brightness: state.brightness,
            brightness: state.brightness,
            contrast: state.contrast,
            saturation: state.saturation
          }
        ]
      }
    case SET_ACTIVE_MODEL: {
      return {
        ...state, 
        externalModel: payload.model
      }
    }
    default:
      return state;
  }
}
