import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { UndoIcon, RedoIcon } from '../../3-utils/Icons'
import colors from '../../0-base/colors'

export function UndoButton ({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <UndoIcon />
    </TouchableOpacity>
  )
}

export function RedoButton ({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <RedoIcon />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0, 0.4)',
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 5
  }
})
