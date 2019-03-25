import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  CameraRoll
} from "react-native";
import colors from "../../0-base/colors";
import ImagePreview from "./ImagePreview";
import { doChangeImage } from "../editor";
const { width, height } = Dimensions.get("window");
import { connect } from "react-redux";

const actions = {
  changeImage: doChangeImage
};

class MoreImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      numImagesToShow: 100
    };
  }

  componentDidMount() {
    let { numImagesToShow } = this.state;
    CameraRoll.getPhotos({
      first: numImagesToShow,
      assetType: "Photos",
      groupTypes: "All"
    }).then(r => {
      console.log(r.edges);
      this.setState({ images: r.edges });
    });
  }

  render() {
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
          {this.state.images.map(({ node }, index) => {
            // if (node.group_name !== "Camera Roll") return null;
            return (
              <ImagePreview
                key={index}
                onPress={this.props.changeImage}
                image={node.image}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

export default connect(
  null,
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
