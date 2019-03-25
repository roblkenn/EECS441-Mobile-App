import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
// import { Haptic } from "expo";
import { connect } from "react-redux";

const select = ({ editor }) => ({
  hide: editor.activeSlider
});

function AutoEdit({ hide }) {
  if (hide) return null
  return (
    <TouchableOpacity
      onPress={() => null}
      style={styles.autoEdit}
    >
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
        MAGICAL AUTO BUTTON
      </Text>
    </TouchableOpacity>
  );
}

export default connect(
  select,
  null
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
