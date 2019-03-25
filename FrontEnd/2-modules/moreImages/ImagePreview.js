import React from 'react'
import { Image, TouchableHighlight, StyleSheet } from 'react-native'
// import { Haptic } from 'expo'

export default function ({ image, onPress }) {
  return (
    <TouchableHighlight
      onPress={() => {
        // Haptic.impact('light')
        onPress(image)
      }}
    >
      <Image style={styles.imgPreview} source={image} />
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  imgPreview: {
    height: 125,
    width: 125,
  }
})
