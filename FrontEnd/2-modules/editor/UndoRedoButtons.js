import React, { useState } from "react";
import { UndoButton, RedoButton } from "./UndoButton";
// import { Haptic } from "expo";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import { doUndo } from "./ducks/actions";

const select = ({editor}) => ({
  hide: editor.activeSlider,
  showUndo: editor.history.length
})

const actions = {
  handleUndo: doUndo
}

function UndoRedoButtons({ hide, handleUndo, showUndo }) {
  if (hide) return null;
  return (
    <View style={styles.container}>
      {showUndo > 0 && <UndoButton onPress={handleUndo} /> }
      {/* <RedoButton onPress={() => null} /> */}
    </View>
  );
}

export default connect(
  select,
  actions
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