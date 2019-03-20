import React, { Component } from "react";
import Main from "./Main";
import { Market } from "./market";
import Swiper from "./react-native-swiper";
import MoreImages from "./moreImages/MoreImages";
import { connect } from "react-redux";
import { Settings } from "./settings/Settings";

const select = ({ editor }) => ({
  scrollEnabled: editor.scrollEnabled
});

class Router extends Component {
  render() {
    return (
      <Swiper
        loop={false}
        index={1}
        bounces={true}
        scrollEnabled={this.props.scrollEnabled}
        scrollsToTop={true}
      >
        <MoreImages />
        <Swiper
          loop={false}
          index={0}
          horizontal={false}
          scrollEnabled={this.props.scrollEnabled}
          scrollsToTop={true}
          // dotColor="rgba(0,0,0,0)"
          // activeDotColor="rgba(0,0,0,0)"
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
