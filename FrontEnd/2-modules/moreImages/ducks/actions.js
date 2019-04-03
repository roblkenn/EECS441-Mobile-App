import { CameraRoll } from "react-native";
import { FINISH_LOAD_IMAGES } from "./types";
import { AUTO_EDIT } from "../../editor/ducks/types";

export function doStartLoadImages() {
  return dispatch => {
    CameraRoll.getPhotos({
      first: 100,
      assetType: "Photos",
      groupTypes: "All"
    }).then(r => dispatch(doFinishLoadImages(r.edges)));
  };
}

export function doFinishLoadImages(images) {
  return {
    type: FINISH_LOAD_IMAGES,
    payload: {
      images
    }
  };
}

export function doAutoEdit() {
  return (dispatch, getState) => {
    const { editHistory } = getState().editor;

    // calc means
    if (editHistory.length) {
      let avgTemp = 0
      let avgBrightness = 0
      let avgSaturation = 0
      let avgContrast = 0

      editHistory.map(state => {
        avgTemp += state.temperature
        avgBrightness += state.brightness
        avgSaturation += state.saturation
        avgContrast += state.contrast
      })
      
      avgTemp /= editHistory.length
      avgBrightness /= editHistory.length
      avgContrast /= editHistory.length
      avgSaturation /= editHistory.length
      
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
      })
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
  const max = 1;
  const min = -1;
  const getRandomValue = () => Math.random() * (max - min) + min;
  const temperature = getRandomValue();
  const brightness = getRandomValue();
  const contrast = getRandomValue();
  const saturation = getRandomValue();
  return {
    type: AUTO_EDIT,
    payload: {
      settings: {
        temperature,
        brightness,
        contrast,
        saturation
      }
    }
  };
  // return dispatch => {

  // }
}
