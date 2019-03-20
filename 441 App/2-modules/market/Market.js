import React, {Component} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Header from "../Header.js";
import colors from '../../0-base/colors'
import photo from "../../assets/photos/camel.jpg"

export default function Market() {

  return (
    <View style={styles.container}>
      <Text style = {styles.title}>
        Marketplace
      </Text>
      <Text style = {styles.post}>
        John Doe
      </Text>
      <Text style = {styles.description}>
        I am a professional photographer from Illinois. I created this preset for portraits. It increases saturation, brightness, and makes photos more attractive. Check out my profile for examples!
      </Text>
      <Text style = {styles.post}>
        John Doe
      </Text>
      <Text style = {styles.description}>
        I am a professional photographer from Illinois. I created this preset for portraits. It increases saturation, brightness, and makes photos more attractive. Check out my profile for examples!
      </Text>
      <Text style = {styles.post}>
        John Doe
      </Text>
      <Text style = {styles.description}>
        I am a professional photographer from Illinois. I created this preset for portraits. It increases saturation, brightness, and makes photos more attractive. Check out my profile for examples!
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 90,
  },
  title: {
    fontSize: 30,
    alignItems: 'center',
    textTransform: 'uppercase',
    letterSpacing: 3,
    color: 'orange',
  },
  post: {
    fontSize: 30,
    letterSpacing: 1,
    color: colors.black
  },
  description: {
    fontSize: 20,
    color: colors.black,
    marginBottom: 20
  },
  price: {
    borderWidth: 1, 
    position: 'absolute',
    right: 30,
    top: 220,
    padding: 10,
    backgroundColor: 'orange',
    borderColor: colors.offWhite
  }
})
