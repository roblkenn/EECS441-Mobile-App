import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import colors from '../0-base/colors'
export default function Header () {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        St 
        <Text style={styles.invertedLetter}>y</Text>
        le
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.black,
    paddingTop: 45,
    paddingBottom: 10,
    alignItems: 'center',
    shadowOffset: { height: 1 },
    shadowOpacity: 0.2
  },
  title: {
    fontSize: 30,
    textTransform: 'uppercase',
    letterSpacing: 3,
    color: colors.offWhite,
  },
  invertedLetter: {
    transform: [{ rotate: '90deg'}],
    color: 'white',
  }
})
