import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import {
  contrast,
  saturate,
  temperature,
  concatColorMatrices,
  ColorMatrix,
  brightness
} from "react-native-color-matrix-image-filters";
import { WhiteText } from "../../3-utils/Text";
import SaveableImage from "./SaveableImage";
import { DownloadIcon, CompareIcon } from "../../3-utils/Icons";
import { doStartCompare, doStopCompare } from "./ducks/actions";
import styled from "styled-components/native";

const select = ({ editor }) => ({
  src: editor.currentImage,
  temperatureValue: editor.temperature,
  contrastValue: editor.contrast,
  brightnessValue: editor.brightness,
  saturationValue: editor.saturation,
  temporaryValue: editor.temporaryValue,
  activeSlider: editor.activeSlider,
  showCompare: editor.history.length > 0
});

const actions = {
  startCompare: doStartCompare,
  stopCompare: doStopCompare
};

function CurrentImage({
  src,
  saturationValue,
  contrastValue,
  temperatureValue,
  brightnessValue,
  activeSlider,
  temporaryValue,
  showCompare,
  startCompare,
  stopCompare,
  setHandleAutoEdit
}) {
  // determines whether to preview an edit value
  // or use the saved one
  function useSliderValue(name, savedValue) {
    return activeSlider === name ? temporaryValue : savedValue;
  }

  // image dimension hooks
  let [imageWidth, setImageWidth] = useState(null);
  let [imageHeight, setImageHeight] = useState(null);
  let [exportImage, setExportImage] = useState({ callback: null });

  const matrix = concatColorMatrices([
    saturate(useSliderValue("saturation", saturationValue)),
    contrast(useSliderValue("contrast", contrastValue)),
    temperature(useSliderValue("temperature", temperatureValue)),
    brightness(useSliderValue("brightness", brightnessValue))
  ]);

  // determines size of image depending on if its longest
  // edge is its width or height
  useEffect(() => {
    src &&
      Image.getSize(src, (width, height) => {
        if (width > height) {
          const windowWidth = Dimensions.get("window").width;
          const derivedHeight = (windowWidth / width) * height;
          setImageHeight(derivedHeight);
          setImageWidth(windowWidth);
        } else {
          const windowHeight = 450;
          const derivedWidth = (windowHeight / height) * width;
          setImageHeight(windowHeight);
          setImageWidth(derivedWidth);
        }
      });
  }, [src]);

  return (
    <Container>
      {/* Image */}
      <ColorMatrix matrix={matrix} style={styles.matrix}>
        {src ? (
          <SaveableImage
            src={src}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            onExport={setExportImage}
            onAutoEdit={setHandleAutoEdit}
          />
        ) : (
          <WhiteText>swipe right to import an image</WhiteText>
        )}
      </ColorMatrix>

      {/* On save */}
      {exportImage.callback && (
        <Download>
          <DownloadIcon style={{ color: "white" }} />
        </Download>
      )}

      {/* Preview original */}
      {showCompare && (
        <Compare onPressIn={startCompare} onPressOut={stopCompare}>
          <CompareIcon style={{ color: "white" }} />
        </Compare>
      )}
    </Container>
  );
}

export default connect(
  select,
  actions
)(CurrentImage);

const styles = StyleSheet.create({
  matrix: {
    flex: 1,
    alignSelf: "stretch",
    width: undefined,
    height: undefined,
    justifyContent: "center",
    alignItems: "center"
  }
});

const Container = styled.View`
  flex: 1;
  align-self: stretch;
`;

const AnchorButton = styled.TouchableOpacity`
  position: absolute;
  background-color: rgb(255, 165, 0);
  padding-vertical: 10;
  padding-horizontal: 16;
`;

const Download = styled(AnchorButton)`
  left: 0;
  top: 0;
`;

const Compare = styled(AnchorButton)`
  right: 0;
  top: 0;
`;
