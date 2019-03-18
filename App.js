import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
// import { AppRegistry } from "react-native";
import Main from "./2-modules/Main";
import Market from "./2-modules/market";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Main },
    Market: { screen: Market },
    initialRouteName: "Home",
    mode: "modal"
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// AppRegistry.registerComponent('myapp', () => App);
