import React, { Component } from 'react'
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  CameraRoll,
  TouchableHighlight
} from 'react-native'
import colors from '../../0-base/colors'
import ImagePreview from './ImagePreview'
const { width, height } = Dimensions.get('window')

// Body of sliding panel
export default class Body extends Component {
  constructor (props) {
    super(props)
    this.state = {
      images: [],
      numImagesToShow: 50
    }
    this.handlePress = this.handlePress.bind(this)
  }
  componentDidMount () {
    let { numImagesToShow } = this.state
    CameraRoll.getPhotos({ first: numImagesToShow }).then(r => {
      this.setState({ images: r.edges })
    })
  }

  handlePress (image) {
    this.props.changeImage(image)
    this.props.simulateClick()
  }

  render () {
    let { images } = this.state
    return (
      <View style={{height: height - 100, }}>
        <ScrollView
          contentContainerStyle={styles.container}
          style={styles.body}
          scrollEnabled={true}
        >
          {images.map(({ node }) => (
            <ImagePreview
              key={node.image.filename}
              onPress={this.handlePress}
              image={node.image}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  body: {
    width,
    flex: 1,
    backgroundColor: colors.darkGrey,
  }
})
