import {combineReducers} from 'redux'
import { editorReducer } from './2-modules/editor';

export default combineReducers({
  editor: editorReducer
})
