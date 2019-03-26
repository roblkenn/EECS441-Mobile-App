import React from 'react'
// import { Haptic } from 'expo'
import { TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../0-base/colors'

export function Button ({ children, onPress, weight }) {
  let handlePress = () => {
    // if (weight) Haptic.impact(weight)
    onPress()
  }
  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black
  },
})