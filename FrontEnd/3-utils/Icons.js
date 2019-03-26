import React from 'react'
import { StyleSheet } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Foundation from 'react-native-vector-icons/Foundation'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import colors from '../0-base/colors'
import AntDesign from 'react-native-vector-icons/AntDesign';

const iconProps = { size: 32, color: 'white' }

export function ContrastIcon () {
  return <Ionicons name='ios-contrast' {...iconProps} />
}

export function BrightnessIcon () {
  return <MaterialIcons name='brightness-6' {...iconProps} />
}

export function TemperatureIcon () {
  return <MaterialCommunityIcons name='temperature-kelvin' {...iconProps} />
}

export function HighlightIcon () {
  return <MaterialIcons name='highlight' {...iconProps} />
}

export function SaturationIcon () {
  return <Feather name='droplet' {...iconProps} />
}

export function CancelIcon (props) {
  return <Foundation style={styles.cancel} name='x' size={48} {...props} />
}

export function SaveIcon (props) {
  return <FontAwesome style={styles.save} name='check' size={40} {...props} />
}

export function DownloadIcon (props) {
  return <Ionicons {...iconProps} name='ios-save' size={24} {...props} />
}

export function CompareIcon (props) {
  return <MaterialIcons {...iconProps} name='compare' size={24} {...props} />
}

// export function DragIcon (props) {
//   return <AntDesign style={styles.dragIcon} name='minus' size={40} {...props} />
// }

export function QuestionIcon (props) {
  return <FontAwesome style={styles.question} name='question-circle' size={40} {...props} />
}

export function UndoIcon (props) {
  return <EvilIcons name='undo' size={30} color='white' {...props}/>
}

export function RedoIcon (props) {
  return <EvilIcons name='redo' size={30} color='white' {...props}/>
}
const styles = StyleSheet.create({
  cancel: {
    color: colors.red
  },
  save: {
    color: colors.lightgreen
  },
  dragIcon: {
    color: 'white',
  },
  question: {
    color: 'grey'
  }
})
