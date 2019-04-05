import { PURCHASED_MODEL } from "./types";

const initialState = {
  purchasedModels: [
    {
      username: "bearb",
      title: "Sunsets",
      description: "Really good preset for sunsets",
      presets: {
        temperature: -1,
        contrast: -1,
        brightness: -1,
        saturation: -1
      }
    },
    {
      username: "crolfes",
      title: "Portraits",
      description: "Really good preset for portraits",
      presets: {
        temperature: 2,
        contrast: 2,
        brightness: 2,
        saturation: 2
      }
    }
  ]
};

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case PURCHASED_MODEL: 
      return {
        ...state,
        purchasedModels: [...state.purchasedModels, payload.model]
      }
    default:
      return state;
  }
}
