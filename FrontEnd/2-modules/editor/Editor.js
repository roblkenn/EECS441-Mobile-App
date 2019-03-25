import React from "react";
import { View, StyleSheet } from "react-native";
import Controls from "./controls";
import CurrentImage from "./CurrentImage";
import EditSlider from "./EditSlider";
import colors from "../../0-base/colors";
import UndoRedoButtons from "./UndoRedoButtons";
import AutoEdit from "./AutoEdit";

export default function Editor() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <CurrentImage />
        <UndoRedoButtons />
      </View>
      <Controls />
      <EditSlider />
      <AutoEdit />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGrey,
    position: "relative"
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 490
  },
});
