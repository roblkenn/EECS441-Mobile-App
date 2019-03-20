import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Header from "./Header";
import { Editor } from "./editor";
import MoreImages from "./moreImages/MoreImages";
import { Button } from "../3-utils/Buttons";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlider: null,
      shouldSimulateClick: false,
      image: require("../assets/photos/camel.jpg")
    };
    this.updateEditor = this.updateEditor.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }

  // allows the editor to inform this component if and what the active slider is
  updateEditor(activeSlider) {
    this.setState({ activeSlider });
  }

  changeImage(image) {
    this.setState({ image });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        {/* <TouchableOpacity
          onPress={() => this.props.navigation.navigate("MoreImages")}
        >
          <Text>Image Select</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Market")}
        >
          <Text>Market</Text>
        </TouchableOpacity> */}
        <Editor />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
