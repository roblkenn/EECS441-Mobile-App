import React, { Component } from "react";
import { Text } from "react-native";
import Main from "./Main";
import { Market } from "./market";
import Swiper from "../3-utils/react-native-swiper";
import MoreImages from "./moreImages/MoreImages";
import { connect } from "react-redux";
import { Settings } from "./settings";

const select = ({ editor }) => ({
  scrollEnabled: editor.scrollEnabled
});

class Router extends Component {
  constructor(props) {
    super(props)
    this.slideToMainView = this.slideToMainView.bind(this)
  }

  slideToMainView() {
    this._swiper.scrollBy(1)
  }

  render() {
    return (
      <Swiper
        loop={false}
        index={1}
        bounces={true}
        scrollEnabled={this.props.scrollEnabled}
        scrollsToTop={true}
        showsPagination={this.props.scrollEnabled}
        ref={(swiper) => {this._swiper = swiper;}}
      >
        <MoreImages slideToMainView={this.slideToMainView} />
        <Swiper
          loop={false}
          index={0}
          horizontal={false}
          scrollEnabled={this.props.scrollEnabled}
          scrollsToTop={true}
          showsPagination={this.props.scrollEnabled}
        >
          <Main />
          <Settings />
        </Swiper>
        <Market />
      </Swiper>
    );
  }
}

export default connect(select)(Router);
