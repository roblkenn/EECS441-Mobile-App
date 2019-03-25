import React from "react";
import { View, Text, StyleSheet, Slider } from "react-native";
import colors from "../../0-base/colors";
import { connect } from "react-redux";
import { doMoveSlider } from "./ducks";
// import { Haptic } from "expo";

const actions = {
  moveSlider: doMoveSlider
};

const select = ({editor}) => ({
  hide: !editor.activeSlider,
  value: editor.temporaryValue,
  step: editor.sliderStep,
  max: editor.maxSliderBound,
  min: editor.minSliderBound
});

function ActiveEditor({ value, hide, moveSlider, step, min, max }) {
  if (hide) return null;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.number}>{Math.round(value * 100)}</Text>
      </View>
      <Slider
        value={value}
        minimumValue={min}
        maximumValue={max}
        step={step}
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
