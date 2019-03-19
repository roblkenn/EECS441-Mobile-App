import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";

const select = ({editor}) => ({
  src: editor.currentImage
})

function CurrentImage({ src }) {
  return <Image style={styles.image} source={src} />;
}

export default connect(select, null)(CurrentImage)

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignSelf: "stretch",
    width: undefined,
    height: undefined,
    resizeMode: "contain"
  }
});
