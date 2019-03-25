import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../../0-base/colors";
import { connect } from "react-redux";
import { CancelIcon, SaveIcon } from "../../../3-utils/Icons";
import { WhiteText } from "../../../3-utils/Text";
import { doSaveEdit, doCancelEdit } from "../ducks";

const select = ({ editor }) => ({
  name: editor.activeSlider
});

const actions = {
  saveEdit: doSaveEdit,
  cancelEdit: doCancelEdit
};

function SaveCancelMenu({ name, saveEdit, cancelEdit }) {
  return (
    <View style={styles.container}>
      <CancelIcon onPress={cancelEdit} style={styles.cancel} />
      <WhiteText>{name}</WhiteText>
      <SaveIcon onPress={saveEdit} style={styles.save} />
    </View>
  );
}

export default connect(
  select,
  actions
)(SaveCancelMenu);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    overflow: "hidden",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
    position: "relative"
  },
  cancel: {
    position: "absolute",
    left: 20,
    color: colors.red
  },
  save: {
    position: "absolute",
    right: 20,
    color: colors.lightgreen
  }
});
