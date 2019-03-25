import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { WhiteText } from "../../3-utils/Text";

export class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <Description>
          Here is where you can change things. Pick your filters, that kind of
          stuff
        </Description>
        <Name>Toggle Filter</Name>
        <Description>
          Here is where you can change things. Pick your filters, that kind of
          stuff
        </Description>
        <Name>Learning</Name>
        <Description>
          Here is where you can change things. Pick your filters, that kind of
          stuff
        </Description>
        <Name>Clear Training Model</Name>
        <Description>
          Here is where you can change things. Pick your filters, that kind of
          stuff
        </Description>
      </View>
    );
  }
}

const Name = ({ children, ...props }) => (
  <Text style={styles.name} {...props}>
    {children}
  </Text>
);
const Description = ({ children, ...props }) => (
  <Text style={styles.description} {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
    backgroundColor: "black"
  },
  title: {
    fontSize: 36,
    color: "white",
    marginBottom: 20,
    marginTop: 20,
  },
  name: {
    fontSize: 20,
    color: 'orange',
    marginBottom: 10,
    marginTop: 10
  },
  description: {
    color: "white",
    marginBottom: 10
  }
});
