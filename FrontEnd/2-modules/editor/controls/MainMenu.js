import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../../0-base/colors";
import { connect } from "react-redux";
import { doStartEdit } from "../ducks";
import { Button } from "../../../3-utils/Buttons";
import {
  HighlightIcon,
  TemperatureIcon,
  ContrastIcon,
  SaturationIcon,
  BrightnessIcon
} from "../../../3-utils/Icons";

const actions = {
  startEdit: doStartEdit
};

function MainMenu({ startEdit }) {
  return (
    <View style={styles.container}>
      <Button onPress={() => startEdit("contrast")}>
        <ContrastIcon />
      </Button>
      <Button onPress={() => startEdit("brightness")}>
        <BrightnessIcon />
      </Button>
      <Button onPress={() => startEdit("temperature")}>
        <TemperatureIcon />
      </Button>
      <Button onPress={() => startEdit("highlights")}>
        <HighlightIcon />
      </Button>
      <Button onPress={() => startEdit("saturation")}>
        <SaturationIcon />
      </Button>
    </View>
  );
}

export default connect(
  null,
  actions
)(MainMenu);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    overflow: "hidden",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
    position: "relative"
  }
});
