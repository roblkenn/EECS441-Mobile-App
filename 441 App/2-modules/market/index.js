import React, {Component} from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function Market() {
  return (
    <View style={styles.container}>
      <Text>Marketplace yo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
