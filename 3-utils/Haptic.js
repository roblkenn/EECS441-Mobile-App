import React from 'react'
import { Haptic } from 'expo'
import { TouchableOpacity } from 'react-native'
export function HapticMedium ({ children, style }) {
  return (
    <TouchableOpacity style={style} onPress={() => Haptic.impact('medium')}>
      {children}
    </TouchableOpacity>
  )
}
