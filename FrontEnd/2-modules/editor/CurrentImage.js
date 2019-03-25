import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  CameraRoll,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import ViewShot from "react-native-view-shot";
import {
  contrast,
  saturate,
  temperature,
  concatColorMatrices,
  ColorMatrix,
  brightness
} from "react-native-color-matrix-image-filters";
import { WhiteText } from "../../3-utils/Text";

const select = ({ editor }) => ({
  src: editor.currentImage,
  temperatureValue: editor.temperature,
  contrastValue: editor.contrast,
  brightnessValue: editor.brightness,
  saturationValue: editor.saturation,
  temporaryValue: editor.temporaryValue,
  activeSlider: editor.activeSlider
});

function CurrentImage({
  src,
  saturationValue,
  contrastValue,
  temperatureValue,
  brightnessValue,
  activeSlider,
  temporaryValue
}) {
  // determines whether to preview an edit value
  // or use the saved one
  function useSliderValue(name, savedValue) {
    return activeSlider === name ? temporaryValue : savedValue;
  }

  // image dimension hooks
  let [imageWidth, setImageWidth] = useState(null);
  let [imageHeight, setImageHeight] = useState(null);

  // determines size of image depending on if its longest
  // edge is its width or height
  useEffect(() => {
    src && Image.getSize(src, (width, height) => {
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
    <View style={styles.container}>
      <ColorMatrix
        matrix={concatColorMatrices([
          saturate(useSliderValue("saturation", saturationValue)),
          contrast(useSliderValue("contrast", contrastValue)),
          temperature(useSliderValue("temperature", temperatureValue)),
          brightness(useSliderValue("brightness", brightnessValue))
        ])}
        style={styles.matrix}
      >
        <View>
          {src && (
            <SaveableImage
              src={src}
              imageWidth={imageWidth}
              imageHeight={imageHeight}
            />
          )}
          {!src && (
            <View>
              <WhiteText>swipe right to import an imagea</WhiteText>
            </View>
          )}
        </View>
      </ColorMatrix>
    </View>
  );
}

class SaveableImage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{ width: this.props.imageWidth, height: this.props.imageHeight }}
      >
        <ViewShot
          style={{
            width: this.props.imageWidth,
            height: this.props.imageHeight
          }}
          ref="viewShot"
          options={{ format: "jpg", quality: 0.9 }}
        >
          <Image
            style={{
              width: this.props.imageWidth,
              height: this.props.imageHeight
            }}
            source={this.props.src}
          />
        </ViewShot>
        <TouchableOpacity
          onPress={() =>
            this.refs.viewShot.capture().then(uri => {
              CameraRoll.saveToCameraRoll(uri);
            })
          }
          style={{ position: "absolute", right: 0 }}
        >
          <Text>Export</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  select,
  null
)(CurrentImage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch"
  },

  matrix: {
    flex: 1,
    alignSelf: "stretch",
    width: undefined,
    height: undefined,
    justifyContent: "center",
    alignItems: "center"
  }
});
