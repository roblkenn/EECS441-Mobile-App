import React, { Component } from "react";
import { connect } from "react-redux";
import { doStartLoadImages } from "../moreImages/ducks";
import ViewShot from "react-native-view-shot";
import Haptic from "react-native-haptic-feedback";
import { Image, View, CameraRoll, ImageStore } from "react-native";
import Axios from "axios";
import RNFS from "react-native-fs";
import { doExportImage } from "./ducks/actions";

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
  }

  saveImageToCameraRoll() {
    let { contrast, brightness, temperature, saturation } = this.props;
    Haptic.trigger("impactHeavy", true);
    this.props.exportImage()
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
    Axios.get("https://styles-api.azurewebsites.net/dataset/").then(r =>
      console.log(r)
    );
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
          options={{ format: "jpg", quality: 1 }}
        >
          <Image
            style={{
              width: this.props.imageWidth,
              height: this.props.imageHeight
            }}
            source={this.props.src}
          />
        </ViewShot>
      </View>
    );
  }
}

export default connect(
  select,
  actions
)(SaveableImage);
