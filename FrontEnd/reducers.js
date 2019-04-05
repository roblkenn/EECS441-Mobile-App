import { combineReducers } from "redux";
import { editorReducer } from "./2-modules/editor";
import { marketReducer } from "./2-modules/market";
import { galleryReducer } from "./2-modules/moreImages";
import { settingsReducer } from "./2-modules/settings";

export default combineReducers({
  editor: editorReducer,
  market: marketReducer,
  gallery: galleryReducer,
  settings: settingsReducer
});
