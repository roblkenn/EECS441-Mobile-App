import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default function CurrentImage ({src}) {
  return  <Image style={styles.image} source={src}/>
}

const styles = StyleSheet.create({
  image : {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    resizeMode: 'contain'
  }
})