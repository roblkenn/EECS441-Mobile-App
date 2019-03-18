import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../../0-base/colors'
import { WhiteText } from '../../3-utils/Text'
import { Button } from '../../3-utils/Buttons'
import {
  HighlightIcon,
  TemperatureIcon,
  ContrastIcon,
  SaturationIcon,
  CancelIcon,
  SaveIcon,
  BrightnessIcon
} from '../../3-utils/Icons'

export default function EditorControls (props) {
  return props.name ? (
    <SaveCancelMenu {...props} />
  ) : (
    <NormalMenu onPress={props.onClick} />
  )
}

function SaveCancelMenu ({ name, onSave, onCancel }) {
  return (
    <View style={styles.container}>
      <CancelIcon onPress={onCancel} style={styles.cancel} />
      <WhiteText>{name}</WhiteText>
      <SaveIcon onPress={onSave} style={styles.save} />
    </View>
  )
}

function NormalMenu ({ onPress }) {
  return (
    <View style={styles.container}>
      <Button onPress={() => onPress('contrast')}>
        <ContrastIcon />
      </Button>
      <Button onPress={() => onPress('brightness')}>
        <BrightnessIcon />
      </Button>
      <Button onPress={() => onPress('temperature')}>
        <TemperatureIcon />
      </Button>
      <Button onPress={() => onPress('highlights')}>
        <HighlightIcon />
      </Button>
      <Button onPress={() => onPress('saturation')}>
        <SaturationIcon />
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    position: 'relative'
  },
  cancel: {
    position: 'absolute',
    left: 20,
    color: colors.red
  },
  save: {
    position: 'absolute',
    right: 20,
    color: colors.lightgreen
  }
})
