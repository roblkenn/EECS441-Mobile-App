import React from "react";
import { View, Text, StyleSheet, Slider } from "react-native";
import colors from "../../0-base/colors";
import { connect } from "react-redux";
import { doMoveSlider } from "./ducks";
import { Haptic } from "expo";

const actions = {
  moveSlider: doMoveSlider
};

const select = ({editor}) => ({
  hide: !editor.activeSlider,
  value: editor.temporaryValue,
});

function ActiveEditor({ value, hide, moveSlider }) {
  if (hide) return null;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.number}>{Math.round(value)}</Text>
      </View>
      <Slider
        value={value}
        minimumValue={0}
        maximumValue={100}
        step={0.01}
        style={styles.slider}
        minimumTrackTintColor={"orange"}
        onValueChange={moveSlider}
      />
    </View>
  );
}

export default connect(
  select,
  actions
)(ActiveEditor);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center"
  },
  slider: {
    width: "80%"
  },
  number: {
    color: "white",
    fontSize: 40,
    marginBottom: 20
  }
});
