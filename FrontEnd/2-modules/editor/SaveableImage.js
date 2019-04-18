import React, { Component } from "react";
import { connect } from "react-redux";
import { doStartLoadImages } from "../moreImages/ducks";
import ViewShot from "react-native-view-shot";
import Haptic from "react-native-haptic-feedback";
import { View, CameraRoll, ImageStore } from "react-native";
import Axios from "axios";
import RNFS from "react-native-fs";
import { doExportImage } from "./ducks/actions";
import styled from "styled-components/native";

const select = ({ editor }) => ({
  contrast: editor.contrast,
  brightness: editor.brightness,
  saturation: editor.saturation,
  temperature: editor.temperature
});

const actions = {
  refreshImageGallery: doStartLoadImages,
  exportImage: doExportImage
};

class SaveableImage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onExport({ callback: this.saveImageToCameraRoll.bind(this) });
    this.props.onAutoEdit({
      callback: this.sendImageToBackendForAutoEdit.bind(this)
    });
  }

  saveImageToCameraRoll() {
    let { contrast, brightness, temperature, saturation } = this.props;
    Haptic.trigger("impactHeavy", true);
    this.props.exportImage();
    this.refs.viewShot
      .capture()
      .then(uri => {
        RNFS.readFile(uri, "base64").then(imageBase64 => {
          Axios.post("https://styles-api.azurewebsites.net/dataset/", {
            imageBase64,
            contrast,
            brightness,
            temperature,
            saturation
          }).then(r => console.log(r));
        });
        return CameraRoll.saveToCameraRoll(uri);
      })
      .then(this.props.refreshImageGallery);
  }

  sendImageToBackendForAutoEdit() {
    this.refs.viewShot.capture().then(uri => {
      RNFS.readFile(uri, "base64").then(imageBase64 => {
        Axios.post("todo new link", {
          imageBase64
        }).then(r => console.log(r));
      });
    });
  }

  render() {
    const { imageWidth, imageHeight, src } = this.props;
    return (
      <Container width={imageWidth} height={imageHeight}>
        <ScreenShot ref="viewShot" options={{ format: "jpg", quality: 1 }}>
          <Image source={src} />
        </ScreenShot>
      </Container>
    );
  }
}

export default connect(
  select,
  actions
)(SaveableImage);

const Image = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Container = styled.View`
  width: ${({ width }) => width || 0};
  height: ${({ height }) => height || 0};
`;

const ScreenShot = styled(ViewShot)`
  flex: 1;
`;
