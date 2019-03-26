import React, { Component, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import colors from "../../0-base/colors";
import ImagePreview from "./ImagePreview";
import { doChangeImage } from "../editor";
const { width, height } = Dimensions.get("window");
import { connect } from "react-redux";
import { doStartLoadImages } from "./ducks";

const select = ({gallery}) => ({
  images: gallery.images
})

const actions = {
  changeImage: doChangeImage,
  loadImages: doStartLoadImages
};

function MoreImages({images, loadImages, changeImage, slideToMainView}) {
  useEffect(loadImages, [])
  return (
    <View
      style={{
        height: height,
        paddingTop: 40,
        backgroundColor: colors.darkGrey
      }}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        style={styles.body}
        scrollEnabled={true}
      >
        {images.map(({ node }, index) => {
          return (
            <ImagePreview
              key={index}
              onPress={image => {
                changeImage(image)
                slideToMainView()
              }}
              image={node.image}
            />
          );
        })}
      </ScrollView>
    </View>)
}

export default connect(
  select,
  actions
)(MoreImages);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  body: {
    width,
    flex: 1,
    backgroundColor: colors.darkGrey
  }
});
