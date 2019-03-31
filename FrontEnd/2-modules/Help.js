import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { doHideHelp } from "./editor";
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
      <Text style={styles.title}>Help</Text>
      <Text style={styles.description}>
        Three simple steps to use Styles!
      </Text>
      <Text style={styles.name}>Step 1:</Text>
      <Text style={styles.description}>Swipe Left to load an image</Text>
      <Text style={styles.name}>Step 2:</Text>
      <Text style={styles.description}>Swipe Right for the marketplace</Text>
      <Text style={styles.name}>Step 3:</Text>
      <Text style={styles.description}>Swipe Up for settings</Text>
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
  },
  title: {
    fontSize: 36,
    color: "white",
    marginBottom: 20,
    marginTop: 20,
  },
  description: {
    color: "white",
    marginBottom: 10
  },
  name: {
    fontSize: 20,
    color: 'orange',
    marginBottom: 10,
    marginTop: 10
  },
});
