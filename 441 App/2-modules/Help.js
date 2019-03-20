import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { doShowHelp, doHideHelp } from "./editor";
import { connect } from "react-redux";

const select = ({ editor }) => ({
  help: editor.help
});

const actions = {
  hideHelp: doHideHelp
};

function Help({ help, hideHelp }) {
  if (!help) return null;
  return (
    <TouchableOpacity onPress={hideHelp} style={styles.container}>
      <Text style={{ color: "white" }}>Swipe Left to load an image</Text>
      <Text style={{ color: "white" }}>Swipe Right for the marketplace</Text>
      <Text style={{ color: "white" }}>Swipe Up for settings</Text>
    </TouchableOpacity>
  );
}

export default connect(
  select,
  actions
)(Help);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.95)",
    position: "absolute",
    zIndex: 200,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});
