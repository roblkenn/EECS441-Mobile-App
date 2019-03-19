import React, { Component } from "react";
import Main from "./2-modules/Main";
import Market from "./2-modules/market";
import Swiper from "react-native-swiper";
import MoreImages from "./2-modules/moreImages/MoreImages";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Swiper loop={false} index={1} bounces={true}>
          <MoreImages />
          <Main />
          <Market />
        </Swiper>
      </Provider>
    );
  }
}
