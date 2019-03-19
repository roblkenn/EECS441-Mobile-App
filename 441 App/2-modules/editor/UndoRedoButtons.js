import React, { useState } from "react";
import { UndoButton, RedoButton } from "./UndoButton";
import { Haptic } from "expo";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";

const select = ({editor}) => ({
  hide: editor.activeSlider
})

function UndoRedoButtons({ hide }) {
  if (hide) return null;
  return (
    <View style={styles.container}>
      <UndoButton onPress={() => Haptic.impact("light")} />
      <RedoButton onPress={() => Haptic.impact("light")} />
    </View>
  );
}

export default connect(
  select,
  null
)(UndoRedoButtons);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    bottom: 0,
    zIndex: 2,
    flexDirection: "row"
  },
});