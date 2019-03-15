import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Haptic } from 'expo'

export default function AutoEdit () {
  return (
    <TouchableOpacity
      onPress={() => Haptic.impact('light')}
      style={styles.autoEdit}
    >
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, }}>MAGICAL AUTO BUTTON</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  autoEdit: {
    backgroundColor: 'orange',
    padding: 15,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})
