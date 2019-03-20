import {combineReducers} from 'redux'
import { editorReducer } from './2-modules/editor';
import { marketReducer } from './2-modules/market';

export default combineReducers({
  editor: editorReducer,
  market: marketReducer
})
