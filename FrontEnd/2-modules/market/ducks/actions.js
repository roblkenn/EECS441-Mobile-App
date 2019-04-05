import { UPLOADED_MODEL_TO_MARKET } from "./types";

export function doUploadModelToMarket({ title, price, description, username }) {
  return (dispatch, getState) => {
    const { editHistory } = getState().editor;

    let avgTemp = 0;
    let avgBrightness = 0;
    let avgSaturation = 0;
    let avgContrast = 0;

    editHistory.forEach(state => {
      avgTemp += state.temperature;
      avgBrightness += state.brightness;
      avgSaturation += state.saturation;
      avgContrast += state.contrast;
    });

    avgTemp /= editHistory.length;
    avgBrightness /= editHistory.length;
    avgContrast /= editHistory.length;
    avgSaturation /= editHistory.length;

    const model = {
      title, price, description, username, presets: {
        temperature: avgTemp,
        brightness: avgBrightness,
        contrast: avgContrast,
        saturation: avgSaturation
      }
    }
    dispatch({
      type: UPLOADED_MODEL_TO_MARKET,
      payload: { model }
    })
  };
}
