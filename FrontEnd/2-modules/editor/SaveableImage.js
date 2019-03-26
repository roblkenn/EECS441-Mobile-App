import React, { Component } from "react";
import { connect } from "react-redux";
import { doStartLoadImages } from "../moreImages/ducks";
import ViewShot from "react-native-view-shot";
import Haptic from "react-native-haptic-feedback";

import { Image, Text, View, TouchableOpacity, CameraRoll } from "react-native";
import { DownloadIcon } from "../../3-utils/Icons";

const actions = {
  refreshImageGallery: doStartLoadImages
};

class SaveableImage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onExport({ callback: this.saveImageToCameraRoll.bind(this) });
  }

  saveImageToCameraRoll() {
    Haptic.trigger("impactHeavy", true);
    this.refs.viewShot
      .capture()
      .then(uri => {
        return CameraRoll.saveToCameraRoll(uri);
      })
      .then(this.props.refreshImageGallery);
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
        {/* <TouchableOpacity
          onPress={() =>
            this.refs.viewShot
              .capture()
              .then(uri => {
                return CameraRoll.saveToCameraRoll(uri);
              })
              .then(this.props.refreshImageGallery)
          }
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255,255,255, 0.4)",
            paddingVertical: 4,
            paddingHorizontal: 6,
            borderWidth: 1,
            borderColor: "lightgrey"
          }}
        >
          <DownloadIcon style={{ color: "white" }} />
        </TouchableOpacity> */}
      </View>
    );
  }
}

export default connect(
  null,
  actions
)(SaveableImage);
