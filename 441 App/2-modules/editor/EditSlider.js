import React from 'react'
import { View, Text, StyleSheet, Slider } from 'react-native'
import colors from '../../0-base/colors'
import { WhiteText } from '../../3-utils/Text'

export default function ActiveEditor ({ onSlide, value }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.number}>{Math.round(value)}</Text>
      </View>
      <Slider
        value={value}
        minimumValue={0}
        maximumValue={100}
        step={0.01}
        style={styles.slider}
        minimumTrackTintColor={'orange'}
        onValueChange={onSlide}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  slider: {
    width: '80%'
  },
  number: {
    color: 'white',
    fontSize: 40,
    marginBottom: 20
  }
})
