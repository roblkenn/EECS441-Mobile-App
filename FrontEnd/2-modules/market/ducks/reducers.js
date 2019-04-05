import { UPLOADED_MODEL_TO_MARKET, REMOVED_MODEL_FROM_MARKET } from "./types";

const initialState = {
  products: [
    {
      username: "bearb",
      title: "Sunsets",
      description:
        "Really good preset for sunsets -- tested on hundreds of pictures taken on Nikon DSLR by a professional photographer.",
      price: "$15.00",
      presets: {
        temperature: 1.24,
        brightness: 0.85,
        contrast: 1.1,
        saturation: 1.4
      }
    },
    {
      username: "crolfes",
      title: "Portraits",
      description: "Preset made and tested on portraits all taken on iPhone XR camera",
      price: "$1.00",
      presets: {
        temperature: 0.87,
        brightness: 1.1,
        contrast: 0.9,
        saturation: 1.0
      }
    },
    {
      username: "jamal412",
      title: "Instagram",
      description: "This is how I edit my photos for Instagram posts... 4K followers!",
      price: "$115.00",
      presets: {
        temperature: 0.9,
        brightness: 1.3,
        contrast: 1.1,
        saturation: 1.3
      }
    },
    {
      username: "arbor",
      title: "forests",
      description: "I take a lot of pictures in forests and this is what I edit them with",
      price: "$13.00",
      presets: {
        temperature: 1,
        brightness: 1.5,
        contrast: 1.2,
        saturation: 1.1
      }
    },
    {
      username: "ecorn",
      title: "Food",
      description: "phone eats first!",
      price: "$15.00",
      presets: {
        temperature: 1.0,
        brightness: 1.3,
        contrast: 0.9,
        saturation: 1.0
      }
    }
  ]
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
    // case REMOVED_MODEL_FROM_MARKET:
    //   return {
    //     ...state,
    //     products: state.products.filter(product => product.title !== )
    //   }
    default:
      return state;
  }
}
