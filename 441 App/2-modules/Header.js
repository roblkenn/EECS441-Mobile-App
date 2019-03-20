import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../0-base/colors";
import { connect } from "react-redux";
import { doShowHelp } from "./editor";
import { QuestionIcon } from "../3-utils/Icons";

const actions = {
  showHelp: doShowHelp
};

function Header({ showHelp }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        St
        <Text style={styles.invertedLetter}>y</Text>
        le
      </Text>
      <TouchableOpacity onPress={showHelp} style={styles.question}>
        <QuestionIcon size={25} />
      </TouchableOpacity>
    </View>
  );
}

export default connect(
  null,
  actions
)(Header);

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.black,
    paddingTop: 45,
    paddingBottom: 10,
    alignItems: "center",
    shadowOffset: { height: 1 },
    shadowOpacity: 0.2
  },
  title: {
    fontSize: 30,
    textTransform: "uppercase",
    letterSpacing: 3,
    color: colors.offWhite
  },
  invertedLetter: {
    transform: [{ rotate: "90deg" }],
    color: "white"
  },
  question: {
    position: 'absolute',
    right: 30,
    bottom: 15
  }
});
