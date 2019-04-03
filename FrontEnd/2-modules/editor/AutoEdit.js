import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { doAutoEdit, doSetActiveModel } from "./ducks/actions";

const select = ({ editor }) => ({
  hide: editor.activeSlider
});

const actions = {
  handleAutoEdit: doAutoEdit,
  setActiveModel: doSetActiveModel
};

function AutoEdit({ hide, handleAutoEdit }) {
  if (hide) return null;
  return (
    <TouchableOpacity onPress={handleAutoEdit} style={styles.autoEdit}>
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
        MAGICAL AUTO BUTTON
      </Text>
    </TouchableOpacity>
  );
}

export default connect(
  select,
  actions
)(AutoEdit);

const styles = StyleSheet.create({
  autoEdit: {
    backgroundColor: "orange",
    padding: 15,
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  }
});
