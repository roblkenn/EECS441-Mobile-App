import { CameraRoll } from "react-native";
import { FINISH_LOAD_IMAGES } from "./types";
import { AUTO_EDIT } from "../../editor/ducks/types";
import { PURCHASED_MODEL } from "../../settings/ducks/types";

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

export function doPurchaseModel(model) {
  return {
    type: PURCHASED_MODEL,
    payload: { model }
  };
}
