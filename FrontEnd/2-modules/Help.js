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
      <Text style={styles.name}>Edit Images:</Text>
      <Text style={styles.description}>Swipe Left to choose an image. Using our main screen, you can custom edit the photo, or apply your selected model.</Text>
      <Text style={styles.name}>Browse Marketplace:</Text>
      <Text style={styles.description}>Swipe Right for the marketplace to browse and purchase other users' presets.</Text>
      <Text style={styles.name}>Upload/Edit your model:</Text>
      <Text style={styles.description}>Swipe Up for setting to view current model, select a new model, or post your model for sale.</Text>
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
  },
  title: {
    fontSize: 36,
    color: "white",
    marginBottom: 20,
    marginTop: 20,
  },
  description: {
    color: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    color: 'orange',
    marginBottom: 10,
    marginTop: 10
  },
});
