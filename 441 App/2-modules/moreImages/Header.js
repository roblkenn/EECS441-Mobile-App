import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import colors from '../../0-base/colors'
import { DragIcon } from '../../3-utils/Icons'
import StyleHeader from '../Header'
const { width } = Dimensions.get('window')

// Header of sliding panel (visible on bottom of page)
export default function Header () {
  return (
    <View style={styles.header}>
      <DragIcon />
      <StyleHeader />
    </View>
  )
} 

const styles = StyleSheet.create({
  header: {
    width,
    height: 100,
    backgroundColor: colors.black,
    alignItems: 'center',
    position: 'relative'
  }
})
