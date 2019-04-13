import {
  UPLOADED_MODEL_TO_MARKET,
  REMOVED_MODEL_FROM_MARKET,
  FETCHED_MARKET_ITEMS
} from "./types";
import uuid from "uuid/v4";
const initialState = {
  products: []
  //   {
  //     username: "bearb",
  //     title: "Sunsets",
  //     description:
  //       "Really good preset for sunsets -- tested on hundreds of pictures taken on Nikon DSLR by a professional photographer.",
  //     price: "$15.00",
  //     id: uuid(),
  //     presets: {
  //       temperature: 1.24,
  //       brightness: 0.85,
  //       contrast: 1.1,
  //       saturation: 1.4
  //     }
  //   },
  //   {
  //     username: "crolfes",
  //     title: "Portraits",
  //     description:
  //       "Preset made and tested on portraits all taken on iPhone XR camera",
  //     price: "$1.00",
  //     id: uuid(),
  //     presets: {
  //       temperature: 0.87,
  //       brightness: 1.1,
  //       contrast: 0.9,
  //       saturation: 1.0
  //     }
  //   },
  //   {
  //     username: "jamal412",
  //     title: "Instagram",
  //     description:
  //       "This is how I edit my photos for Instagram posts... 4K followers!",
  //     price: "$115.00",
  //     id: uuid(),
  //     presets: {
  //       temperature: 0.9,
  //       brightness: 1.3,
  //       contrast: 1.1,
  //       saturation: 1.3
  //     }
  //   }
  // ]
};

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case UPLOADED_MODEL_TO_MARKET:
      const { username } = payload;
      const modelAlreadyExists =
        state.products.filter(item => item.username === username).length !== 0;
      if (modelAlreadyExists) return state;
      return {
        ...state,
        products: [...state.products, payload.model]
      };
    case FETCHED_MARKET_ITEMS:
      return {
        ...state,
        products: payload.products
      };
    // case REMOVED_MODEL_FROM_MARKET:
    //   return {
    //     ...state,
    //     products: state.products.filter(product => product.title !== )
    //   }
    default:
      return state;
  }
}
