import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Header from "./Header";
import { Editor } from "./editor";
import Help from "./Help";

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Editor />
        <Help />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  help: { flex: 1, backgroundColor: "rgba(0, 0, 0, 0.9)", position: "absolute", zIndex: 200, height: '100%', width: '100%' }
});
