import React from 'react'
import {Text, StyleSheet} from 'react-native'
import colors from '../0-base/colors';

export function WhiteText({children, onPress}) {
  return <Text onPress={onPress} style={styles.whiteText}>{children}</Text>
}

const styles = StyleSheet.create({
  whiteText: {
    color: colors.offWhite,
    letterSpacing: 2,
  }
})