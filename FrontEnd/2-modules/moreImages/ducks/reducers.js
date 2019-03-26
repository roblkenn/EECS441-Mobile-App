import { FINISH_LOAD_IMAGES } from "./types";

const initialState = {
  images: [],
  numImagesToShow: 100
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FINISH_LOAD_IMAGES:
      return { ...state, images: payload.images };
    default:
      return state;
  }
}
