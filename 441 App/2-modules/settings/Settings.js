import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export class Settings extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>This is the settings page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})