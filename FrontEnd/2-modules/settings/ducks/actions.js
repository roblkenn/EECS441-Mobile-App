import { AsyncStorage } from "react-native";
import uuidv4 from "uuid/v4";
import { GET_USER_ID } from "./types";

async function getUserID() {
  let id;
  id = await AsyncStorage.getItem("id");
  if (id !== null) {
    // alert(`got id ${id}`);
  } else {
    id = uuidv4();
    await AsyncStorage.setItem("id", id);
    // alert(`set id ${id}`);
  }
  return id;
}

export function doGetUserID() {
  return dispatch => {
    getUserID().then(id =>
      dispatch({
        type: GET_USER_ID,
        payload: { id }
      })
    );
  };
}
